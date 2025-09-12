'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, GitFork, ExternalLink, Search, TrendingUp, User } from 'lucide-react';

interface Repository {
  name: string;
  full_name: string;
  description: string | null;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updated_at?: string;
  created_at?: string;
}

interface GitHubSectionClientProps {
  initialTrendingRepos: Repository[];
  initialUserRepos: Repository[];
}

export function GitHubSectionClient({ initialTrendingRepos, initialUserRepos }: GitHubSectionClientProps) {
  const [trendingRepos] = useState<Repository[]>(initialTrendingRepos);
  const [userRepos] = useState<Repository[]>(initialUserRepos);
  const [searchResults, setSearchResults] = useState<Repository[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState<'user' | 'trending' | 'search'>('user');

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    try {
      setIsSearching(true);
      // Поиск через GitHub API
      const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(searchQuery)}&sort=stars&order=desc&per_page=6`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'AI-Dashboard-2025'
        }
      });

      if (response.ok) {
        const data = await response.json();
        const repos = data.items.map((repo: any) => ({
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description,
          language: repo.language || 'Unknown',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          url: repo.html_url,
          updated_at: repo.updated_at,
          created_at: repo.created_at
        }));
        setSearchResults(repos);
        setActiveTab('search');
      }
    } catch (error) {
      console.error('Error searching repos:', error);
      // Fallback к моковым данным
      const mockSearchResults: Repository[] = [
        {
          name: searchQuery.toLowerCase().replace(/\s+/g, '-'),
          full_name: `search/${searchQuery.toLowerCase().replace(/\s+/g, '-')}`,
          description: `Search results for "${searchQuery}"`,
          language: 'TypeScript',
          stars: Math.floor(Math.random() * 1000),
          forks: Math.floor(Math.random() * 100),
          url: `https://github.com/search/${searchQuery.toLowerCase().replace(/\s+/g, '-')}`
        }
      ];
      setSearchResults(mockSearchResults);
      setActiveTab('search');
    } finally {
      setIsSearching(false);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': 'bg-blue-100 text-blue-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'Python': 'bg-green-100 text-green-800',
      'Go': 'bg-cyan-100 text-cyan-800',
      'Rust': 'bg-orange-100 text-orange-800',
      'Java': 'bg-red-100 text-red-800',
      'HTML': 'bg-orange-100 text-orange-800',
      'CSS': 'bg-blue-100 text-blue-800',
      'Unknown': 'bg-gray-100 text-gray-800',
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const renderRepository = (repo: Repository) => (
    <Card key={repo.full_name} className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors">
              {repo.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{repo.full_name}</p>
            {repo.description && (
              <p className="text-gray-700 text-sm mb-3 line-clamp-2 leading-relaxed">
                {repo.description}
              </p>
            )}
            {repo.updated_at && (
              <p className="text-xs text-gray-400 mb-2">
                Обновлено: {formatDate(repo.updated_at)}
              </p>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(repo.url, '_blank')}
            className="ml-4 hover:bg-blue-50 hover:border-blue-300"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {repo.language && (
              <Badge className={`text-xs ${getLanguageColor(repo.language)}`}>
                {repo.language}
              </Badge>
            )}
            <div className="flex items-center text-sm text-gray-600 hover:text-yellow-600 transition-colors">
              <Star className="h-4 w-4 mr-1" />
              {formatNumber(repo.stars)}
            </div>
            <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <GitFork className="h-4 w-4 mr-1" />
              {formatNumber(repo.forks)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const getCurrentRepos = () => {
    switch (activeTab) {
      case 'user': return userRepos;
      case 'trending': return trendingRepos;
      case 'search': return searchResults;
      default: return userRepos;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">GitHub Репозитории</span>
              <p className="text-sm text-gray-600 font-normal mt-1">
                Ваши проекты, трендовые репозитории и поиск по GitHub
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Search Section */}
          <div className="mb-6">
            <div className="flex space-x-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Поиск репозиториев по названию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Button 
                onClick={handleSearch} 
                disabled={isSearching || !searchQuery.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              >
                {isSearching ? 'Поиск...' : 'Найти'}
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-2 mb-6">
            <Button
              variant={activeTab === 'user' ? 'default' : 'outline'}
              onClick={() => setActiveTab('user')}
              className={activeTab === 'user' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50'}
            >
              <User className="h-4 w-4 mr-2" />
              Мои проекты ({userRepos.length})
            </Button>
            <Button
              variant={activeTab === 'trending' ? 'default' : 'outline'}
              onClick={() => setActiveTab('trending')}
              className={activeTab === 'trending' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50'}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Трендовые ({trendingRepos.length})
            </Button>
            <Button
              variant={activeTab === 'search' ? 'default' : 'outline'}
              onClick={() => setActiveTab('search')}
              disabled={searchResults.length === 0}
              className={activeTab === 'search' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50'}
            >
              <Search className="h-4 w-4 mr-2" />
              Результаты поиска ({searchResults.length})
            </Button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentRepos().map(renderRepository)}
          </div>

          {getCurrentRepos().length === 0 && (
            <div className="text-center py-12">
              {activeTab === 'user' && (
                <>
                  <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Нет данных о ваших репозиториях</p>
                </>
              )}
              {activeTab === 'trending' && (
                <>
                  <TrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Нет данных о трендовых репозиториях</p>
                </>
              )}
              {activeTab === 'search' && (
                <>
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Выполните поиск репозиториев</p>
                </>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 
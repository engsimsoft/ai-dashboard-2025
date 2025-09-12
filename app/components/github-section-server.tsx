'use server';

import { GitHubSectionClient } from './github-section-client';

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

async function getTrendingRepos(): Promise<Repository[]> {
  // Временно используем статические данные для избежания ошибок
  return [
    {
      name: 'ai-dashboard-2025',
      full_name: 'engsimisoft/ai-dashboard-2025',
      description: 'Modern AI Dashboard with real-time market data and news',
      language: 'TypeScript',
      stars: 1247,
      forks: 89,
      url: 'https://github.com/engsimisoft/ai-dashboard-2025',
      updated_at: '2025-01-02T10:30:00Z'
    },
    {
      name: 'S27shortcut-website',
      full_name: 'engsimisoft/S27shortcut-website',
      description: 'Website for S27 shortcut application',
      language: 'JavaScript',
      stars: 45,
      forks: 12,
      url: 'https://github.com/engsimisoft/S27shortcut-website',
      updated_at: '2025-01-01T15:20:00Z'
    },
    {
      name: 'DjangoPlanTracker',
      full_name: 'engsimisoft/DjangoPlanTracker',
      description: 'Django-based plan tracking application',
      language: 'Python',
      stars: 23,
      forks: 8,
      url: 'https://github.com/engsimisoft/DjangoPlanTracker',
      updated_at: '2024-12-28T09:15:00Z'
    }
  ];
}

async function getUserRepos(): Promise<Repository[]> {
  try {
    // Пробуем получить реальные данные, но с обработкой ошибок
    const response = await fetch(`https://api.github.com/users/engsimisoft/repos?sort=updated&per_page=6`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'AI-Dashboard-2025'
      },
      // Добавляем таймаут
      signal: AbortSignal.timeout(5000)
    });

    if (response.ok) {
      const repos = await response.json();
      return repos.map((repo: any) => ({
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
    }
  } catch (error) {
    console.error('Error fetching user repos:', error);
  }

  // Fallback данные
  return [
    {
      name: 'ai-dashboard-2025',
      full_name: 'engsimisoft/ai-dashboard-2025',
      description: 'Modern AI Dashboard with real-time market data and news',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      url: 'https://github.com/engsimisoft/ai-dashboard-2025',
      updated_at: '2025-01-02T10:30:00Z'
    },
    {
      name: 'S27shortcut-website',
      full_name: 'engsimisoft/S27shortcut-website',
      description: 'Website for S27 shortcut application',
      language: 'HTML',
      stars: 0,
      forks: 0,
      url: 'https://github.com/engsimisoft/S27shortcut-website',
      updated_at: '2025-01-01T15:20:00Z'
    },
    {
      name: 'DjangoPlanTracker',
      full_name: 'engsimisoft/DjangoPlanTracker',
      description: 'Django-based plan tracking application',
      language: 'Python',
      stars: 0,
      forks: 0,
      url: 'https://github.com/engsimisoft/DjangoPlanTracker',
      updated_at: '2024-12-28T09:15:00Z'
    }
  ];
}

export async function GitHubSectionServer() {
  // Получаем данные с обработкой ошибок
  const [userRepos, trendingRepos] = await Promise.allSettled([
    getUserRepos(),
    getTrendingRepos()
  ]);
  
  const finalUserRepos = userRepos.status === 'fulfilled' ? userRepos.value : [];
  const finalTrendingRepos = trendingRepos.status === 'fulfilled' ? trendingRepos.value : [];
  
  return (
    <GitHubSectionClient 
      initialTrendingRepos={finalTrendingRepos}
      initialUserRepos={finalUserRepos}
    />
  );
} 
#!/usr/bin/env node

/**
 * Deploy Helper Script
 * Автоматизация деплоя Next.js проектов на Vercel
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeployHelper {
  constructor() {
    // Находим корень проекта (где находится package.json)
    this.projectRoot = this.findProjectRoot();
    console.log(`📁 Корень проекта: ${this.projectRoot}`);
  }

  // Поиск корня проекта
  findProjectRoot() {
    let currentDir = process.cwd();
    
    // Если запускаем из docs/deploy, поднимаемся на 2 уровня вверх
    if (currentDir.endsWith('docs/deploy') || currentDir.endsWith('docs\\deploy')) {
      return path.resolve(currentDir, '../..');
    }
    
    // Ищем package.json в текущей папке и выше
    while (currentDir !== path.dirname(currentDir)) {
      if (fs.existsSync(path.join(currentDir, 'package.json'))) {
        return currentDir;
      }
      currentDir = path.dirname(currentDir);
    }
    
    // Если не найден, используем текущую папку
    return process.cwd();
  }

  // Проверка и исправление package.json
  fixPackageJson() {
    const packagePath = path.join(this.projectRoot, 'package.json');
    if (!fs.existsSync(packagePath)) {
      console.log('❌ package.json не найден');
      return false;
    }

    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    // Проверяем обязательные скрипты
    const requiredScripts = {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'next lint'
    };

    let changed = false;
    if (!pkg.scripts) pkg.scripts = {};

    Object.entries(requiredScripts).forEach(([key, value]) => {
      if (!pkg.scripts[key]) {
        pkg.scripts[key] = value;
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
      console.log('✅ package.json исправлен');
    }

    return true;
  }

  // Исправление Next.js конфигурации
  fixNextConfig() {
    const configPaths = [
      'next.config.js',
      'next.config.mjs',
      'next.config.ts'
    ];

    let configPath = null;
    for (const p of configPaths) {
      if (fs.existsSync(path.join(this.projectRoot, p))) {
        configPath = p;
        break;
      }
    }

    if (!configPath) {
      // Создаем новый конфиг
      const config = `/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // изменить на true если нужно
  }
};

export default nextConfig;`;
      
      fs.writeFileSync(path.join(this.projectRoot, 'next.config.mjs'), config);
      console.log('✅ next.config.mjs создан');
      return;
    }

    // Читаем существующий конфиг
    let content = fs.readFileSync(path.join(this.projectRoot, configPath), 'utf8');
    
    // Проверяем наличие eslint.ignoreDuringBuilds
    if (!content.includes('ignoreDuringBuilds')) {
      console.log('⚠️  Добавьте в next.config.js: eslint: { ignoreDuringBuilds: true }');
    } else {
      console.log('✅ next.config.js уже настроен');
    }
  }

  // Исправление ESLint конфигурации
  fixESLintConfig() {
    const eslintPath = path.join(this.projectRoot, '.eslintrc.json');
    
    const defaultConfig = {
      extends: ["next/core-web-vitals", "next/typescript"],
      rules: {
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@next/next/no-img-element": "off"
      }
    };

    if (!fs.existsSync(eslintPath)) {
      fs.writeFileSync(eslintPath, JSON.stringify(defaultConfig, null, 2));
      console.log('✅ .eslintrc.json создан');
    } else {
      const config = JSON.parse(fs.readFileSync(eslintPath, 'utf8'));
      if (!config.rules || !config.rules['react/no-unescaped-entities']) {
        config.rules = { ...config.rules, ...defaultConfig.rules };
        fs.writeFileSync(eslintPath, JSON.stringify(config, null, 2));
        console.log('✅ .eslintrc.json обновлен');
      } else {
        console.log('✅ .eslintrc.json уже настроен');
      }
    }
  }

  // Создание .env.example
  createEnvExample() {
    const envPath = path.join(this.projectRoot, '.env.example');
    if (fs.existsSync(envPath)) {
      console.log('✅ .env.example уже существует');
      return;
    }

    const envContent = `# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (для будущего использования)
# DATABASE_URL=
# SUPABASE_URL=
# SUPABASE_ANON_KEY=

# Auth (для будущего использования)  
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
# CLERK_SECRET_KEY=

# Analytics (опционально)
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID=`;

    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env.example создан');
  }

  // Проверка .gitignore
  checkGitignore() {
    const gitignorePath = path.join(this.projectRoot, '.gitignore');
    if (!fs.existsSync(gitignorePath)) {
      console.log('⚠️  .gitignore не найден');
      return;
    }

    const content = fs.readFileSync(gitignorePath, 'utf8');
    const required = ['node_modules', '.env*.local', '.next', '.vercel'];
    
    const missing = required.filter(item => !content.includes(item));
    if (missing.length > 0) {
      console.log(`⚠️  Добавьте в .gitignore: ${missing.join(', ')}`);
    } else {
      console.log('✅ .gitignore настроен правильно');
    }
  }

  // Git команды
  gitInit(repoUrl) {
    try {
      // Переходим в корень проекта для git команд
      process.chdir(this.projectRoot);
      
      execSync('git init', { stdio: 'inherit' });
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Initial commit: ready for deployment"', { stdio: 'inherit' });
      execSync('git branch -M main', { stdio: 'inherit' });
      
      if (repoUrl) {
        execSync(`git remote add origin ${repoUrl}`, { stdio: 'inherit' });
        execSync('git push -u origin main', { stdio: 'inherit' });
      }
      
      console.log('✅ Git репозиторий настроен');
    } catch (error) {
      console.log('❌ Ошибка Git:', error.message);
    }
  }

  // Принудительный редеплой
  forceDeploy(message = 'Force redeploy') {
    try {
      // Переходим в корень проекта для git команд
      process.chdir(this.projectRoot);
      
      execSync(`git commit --allow-empty -m "${message}"`, { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      console.log('✅ Принудительный деплой запущен');
    } catch (error) {
      console.log('❌ Ошибка деплоя:', error.message);
    }
  }

  // Полная подготовка к деплою
  prepareForDeploy() {
    console.log('🚀 Подготовка проекта к деплою...\n');
    
    this.fixPackageJson();
    this.fixNextConfig();
    this.fixESLintConfig();
    this.createEnvExample();
    this.checkGitignore();
    
    console.log('\n✅ Проект готов к деплою!');
    console.log('\nСледующие шаги:');
    console.log('1. Создайте репозиторий на GitHub');
    console.log('2. Запустите: node docs/deploy/deploy-helper.js git <URL_РЕПОЗИТОРИЯ>');
    console.log('3. Создайте проект на Vercel из GitHub репозитория');
  }

  // Основной метод
  run() {
    const args = process.argv.slice(2);
    const command = args[0];

    switch (command) {
      case 'prepare':
        this.prepareForDeploy();
        break;
      case 'git':
        this.gitInit(args[1]);
        break;
      case 'force':
        this.forceDeploy(args[1]);
        break;
      case 'fix':
        this.fixPackageJson();
        this.fixNextConfig();
        this.fixESLintConfig();
        console.log('✅ Конфигурация исправлена');
        break;
      default:
        console.log(`
🚀 Deploy Helper для Next.js + Vercel

Команды:
  prepare     - Подготовить проект к деплою
  git <url>   - Настроить Git и отправить в репозиторий
  force [msg] - Принудительный редеплой
  fix         - Исправить конфигурацию

Примеры:
  node docs/deploy/deploy-helper.js prepare
  node docs/deploy/deploy-helper.js git https://github.com/user/repo.git
  node docs/deploy/deploy-helper.js force "Fix deployment issues"
  node docs/deploy/deploy-helper.js fix

Запуск из любой папки проекта!
        `);
    }
  }
}

// Запуск
const helper = new DeployHelper();
helper.run(); 
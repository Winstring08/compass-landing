import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  DownloadIcon, CheckIcon, DeviceIcon, CloudIcon,
  WindowsIcon, AppleIcon, LinuxIcon, AndroidIcon,
  ShieldIcon, DatabaseIcon, RocketIcon, CrownIcon
} from '../../components/Icons';
import { button } from '@/styles/recipes/button';

interface Platform {
  name: string;
  version: string;
  size: string;
  icon: React.ReactNode;
  recommended?: boolean;
}

const Download: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('windows');

  const platforms: Record<string, Platform> = {
    windows: {
      name: 'Windows',
      version: '10/11',
      size: '85 MB',
      icon: <WindowsIcon size={32} />,
      recommended: true
    },
    macos: {
      name: 'macOS',
      version: '11.0+',
      size: '92 MB',
      icon: <AppleIcon size={32} />
    },
    linux: {
      name: 'Linux',
      version: 'Ubuntu/Debian',
      size: '78 MB',
      icon: <LinuxIcon size={32} />
    },
    android: {
      name: 'Android',
      version: '8.0+',
      size: '45 MB',
      icon: <AndroidIcon size={32} />
    },
    ios: {
      name: 'iOS',
      version: '14.0+',
      size: '52 MB',
      icon: <AppleIcon size={32} />
    }
  };

  const features = [
    '256비트 AES 암호화',
    '무제한 비밀번호 저장',
    '모든 기기 동기화',
    '생체 인증 지원',
    '오프라인 접근',
    '자동 백업',
    '2단계 인증',
    '팀 공유 기능'
  ];

  const requirements = {
    windows: [
      'Windows 10 버전 1903 이상',
      '4GB RAM (8GB 권장)',
      '200MB 여유 공간',
      '.NET Framework 4.8'
    ],
    macos: [
      'macOS Big Sur 11.0 이상',
      '4GB RAM (8GB 권장)',
      '200MB 여유 공간',
      'Apple Silicon 지원'
    ],
    linux: [
      'Ubuntu 20.04 LTS 이상',
      '4GB RAM (8GB 권장)',
      '200MB 여유 공간',
      'GTK 3.24+'
    ],
    android: [
      'Android 8.0 (API 26) 이상',
      '2GB RAM',
      '100MB 여유 공간',
      'Google Play 서비스'
    ],
    ios: [
      'iOS/iPadOS 14.0 이상',
      'iPhone 7 이상',
      '100MB 여유 공간',
      'Face ID/Touch ID 지원'
    ]
  };

  const browsers = [
    { name: 'Chrome', available: true },
    { name: 'Firefox', available: true },
    { name: 'Edge', available: true },
    { name: 'Safari', available: false }
  ];

  return (
    <div className="min-h-screen pt-16 bg-surface-light-200 dark:bg-surface-dark-500 discord-scrollbar">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-brand/10 dark:bg-brand/20 border-2 border-brand/20 dark:border-brand/30"
            >
              <DownloadIcon size={40} className="text-brand" />
            </motion.div>
            <h1 className="text-5xl mb-4 gradient-text">
              Compass 다운로드
            </h1>
            <p className="text-xl text-text-light dark:text-text-secondary max-w-3xl mx-auto leading-relaxed">
              모든 플랫폼에서 Compass를 경험하세요
            </p>
            <Link to="/download" className={button({ intent: "primary", size: "lg" }).root()}>
                <WindowsIcon size={32} className="mr-2" />
                Windows용 다운로드
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Platform Selector */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand/10 dark:bg-brand/20 rounded-full mb-6">
                <DeviceIcon size={16} className="text-brand" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand">플랫폼 선택</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {Object.entries(platforms).map(([key, platform]) => (
                <motion.button
                  key={key}
                  onClick={() => setSelectedPlatform(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-6 rounded-discord transition-all duration-150 ${selectedPlatform === key
                    ? 'bg-brand text-white shadow-discord-lg'
                    : 'card-discord hover:bg-surface-light-300 dark:hover:bg-surface-dark-400'
                    }`}
                >
                  {platform.recommended && (
                    <span className="absolute -top-2 -right-2 bg-status-success text-white text-xxs font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                      추천
                    </span>
                  )}
                  <div className={`mb-2 flex justify-center ${selectedPlatform === key ? 'text-white' : 'text-brand'}`}>
                    {platform.icon}
                  </div>
                  <div className={`text-sm font-medium ${selectedPlatform === key ? 'text-white' : 'text-text-light dark:text-text-primary'}`}>
                    {platform.name}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Download Card */}
              <motion.div
                key={selectedPlatform}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="card-elevated p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-brand/10 dark:bg-brand/20 mr-4">
                    <span className="text-brand">{platforms[selectedPlatform].icon}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-light dark:text-white">
                      {platforms[selectedPlatform].name}
                    </h2>
                    <p className="text-text-light dark:text-text-secondary">
                      버전 {platforms[selectedPlatform].version} • {platforms[selectedPlatform].size}
                    </p>
                  </div>
                </div>

                <button className="w-full btn-brand py-4 text-lg flex items-center justify-center mb-6">
                  <DownloadIcon size={20} className="mr-2" />
                  지금 다운로드
                </button>

                <div className="space-y-4">
                  <h3 className="font-semibold text-xs uppercase tracking-wider text-text-muted">시스템 요구사항</h3>
                  <ul className="space-y-2">
                    {requirements[selectedPlatform as keyof typeof requirements].map((req, index) => (
                      <li key={index} className="flex items-start p-2 rounded-discord hover:bg-surface-light-300 dark:hover:bg-surface-dark-100 transition-colors">
                        <CheckIcon size={16} className="text-status-success mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-light dark:text-text-secondary">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-brand/10 dark:bg-brand/20 rounded-discord">
                  <div className="flex items-start space-x-3">
                    <CrownIcon size={20} className="text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-light dark:text-text-secondary">
                        <strong className="text-brand">무료 체험:</strong> 설치 후 14일 무료 체험을 시작할 수 있습니다.
                        신용카드 정보는 필요하지 않습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                {/* Features Card */}
                <div className="card-elevated p-8 bg-gradient-to-br from-brand/5 to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10 border border-brand/20">
                  <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-white flex items-center">
                    <ShieldIcon size={28} className="text-brand mr-3" />
                    모든 플랜에 포함
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center p-2 rounded-discord hover:bg-surface-light-100 dark:hover:bg-surface-dark-400 transition-colors">
                        <CheckIcon size={20} className="text-status-success mr-3 flex-shrink-0" />
                        <span className="text-sm text-text-light dark:text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Web Version Card */}
                <div className="card-discord p-6">
                  <div className="flex items-center mb-4">
                    <CloudIcon size={24} className="text-brand mr-3" />
                    <h3 className="text-xl font-bold text-text-light dark:text-white">
                      웹 버전도 사용 가능
                    </h3>
                  </div>
                  <p className="text-text-light dark:text-text-secondary mb-4">
                    설치 없이 브라우저에서 바로 사용할 수 있는 웹 버전도 제공합니다.
                  </p>
                  <button className="btn-secondary flex items-center">
                    <RocketIcon size={16} className="mr-2" />
                    웹 버전 시작하기
                  </button>
                </div>

                {/* Browser Extensions Card */}
                <div className="card-discord p-6">
                  <div className="flex items-center mb-4">
                    <DeviceIcon size={24} className="text-brand mr-3" />
                    <h3 className="text-xl font-bold text-text-light dark:text-white">
                      브라우저 확장 프로그램
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {browsers.map((browser) => (
                      <a
                        key={browser.name}
                        href="#"
                        className={`flex items-center justify-between p-3 rounded-discord transition-all duration-150 ${browser.available
                          ? 'bg-surface-light-300 dark:bg-surface-dark-100 hover:bg-brand/10 dark:hover:bg-brand/20 cursor-pointer'
                          : 'bg-surface-light-300/50 dark:bg-surface-dark-100/50 opacity-50 cursor-not-allowed'
                          }`}
                      >
                        <span className="text-sm font-medium text-text-light dark:text-text-primary">
                          {browser.name}
                        </span>
                        {browser.available ? (
                          <DownloadIcon size={16} className="text-brand" />
                        ) : (
                          <span className="text-xxs font-bold uppercase tracking-wider text-text-muted">곧 출시</span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Section */}
            <div className="mt-12 card-elevated p-8 text-center bg-gradient-to-br from-brand/5 to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10 border border-brand/20">
              <DatabaseIcon size={48} className="text-brand mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-text-light dark:text-white">
                기업용 솔루션이 필요하신가요?
              </h2>
              <p className="text-text-light dark:text-text-secondary mb-6 max-w-2xl mx-auto">
                맞춤형 배포, 중앙 집중식 관리, 우선 지원 등 기업을 위한 특별한 기능을 제공합니다.
              </p>
              <button className="btn-brand inline-flex items-center">
                <ShieldIcon size={20} className="mr-2" />
                기업용 문의하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
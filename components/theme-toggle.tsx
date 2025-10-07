'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative"
    >
      <AnimatedThemeToggler />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

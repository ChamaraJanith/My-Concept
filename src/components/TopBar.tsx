import React from 'react';
import { Phone, Mail, User, ShieldCheck, Sparkles } from 'lucide-react';

interface TopBarProps {
  onOpenLogin: () => void;
  currency: 'LKR' | 'USD';
  onToggleCurrency: () => void;
  onReplayIntro?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ 
  onOpenLogin, 
  currency, 
  onToggleCurrency,
  onReplayIntro
}) => {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <a href="tel:0112909010" className="top-bar-link">
            <Phone size={14} className="top-bar-icon" />
            <span>0112 90 90 10</span>
          </a>
          <span className="top-bar-separator">|</span>
          <a href="tel:0716891891" className="top-bar-link">
            <span>0716 891 891</span>
          </a>
          <span className="top-bar-separator">•</span>
          <a href="mailto:travels@nationwide.lk" className="top-bar-link">
            <Mail size={14} className="top-bar-icon" />
            <span>travels@nationwide.lk</span>
          </a>
        </div>

        <div className="top-bar-right">
          {onReplayIntro && (
            <button
              type="button"
              onClick={onReplayIntro}
              className="replay-intro-btn"
              title="Play Welcome Opening Screen Again"
            >
              <Sparkles size={13} className="text-amber-400" />
              <span>Intro Screen</span>
            </button>
          )}

          <div className="top-bar-badge">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>SLTDA Approved Agency</span>
          </div>

          <button 
            type="button" 
            onClick={onToggleCurrency} 
            className="currency-toggle-btn"
            title="Switch Currency View"
          >
            Currency: <strong>{currency}</strong>
          </button>

          <button 
            type="button" 
            onClick={onOpenLogin}
            className="top-bar-login-btn"
            id="login-button"
          >
            <User size={15} />
            <span>Nationwide Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

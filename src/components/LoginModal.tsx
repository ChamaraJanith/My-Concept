import { useState } from 'react';
import { X, Lock, Mail, UserCheck, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'traveler' | 'agent'>('traveler');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleDemoFill = () => {
    setEmail(activeTab === 'traveler' ? 'traveler@nationwide.lk' : 'agent@nationwide.lk');
    setPassword('Nationwide@2026');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container login-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Close login modal"
        >
          <X size={20} />
        </button>

        {!isLoggedIn ? (
          <div>
            <div className="login-modal-header">
              <div className="login-logo-pill">
                Nationwide<strong>.lk</strong> Portal
              </div>
              <h2 className="login-modal-title">Welcome to Nationwide</h2>
              <p className="login-modal-desc">
                Access your holiday itinerary, visa statuses, and exclusive travel discounts.
              </p>
            </div>

            {/* Tab switch */}
            <div className="login-tab-bar">
              <button
                type="button"
                className={`login-tab-btn ${activeTab === 'traveler' ? 'active' : ''}`}
                onClick={() => setActiveTab('traveler')}
              >
                Traveler Login
              </button>
              <button
                type="button"
                className={`login-tab-btn ${activeTab === 'agent' ? 'active' : ''}`}
                onClick={() => setActiveTab('agent')}
              >
                Travel Agent Portal
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="login-form">
              <div className="form-group">
                <label className="form-label">
                  <Mail size={15} /> Registered Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Lock size={15} /> Secure Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="login-options-row">
                <label className="remember-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-password-link" onClick={(e) => e.preventDefault()}>
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn-primary w-full login-submit-btn"
              >
                <UserCheck size={18} />
                <span>Sign In to {activeTab === 'traveler' ? 'My Account' : 'Partner Portal'}</span>
              </button>

              <button
                type="button"
                onClick={handleDemoFill}
                className="demo-autofill-btn"
              >
                Quick Demo Autofill
              </button>
            </form>
          </div>
        ) : (
          <div className="login-success-box">
            <CheckCircle2 size={56} className="text-emerald-500" />
            <h3>Successfully Signed In!</h3>
            <p>Welcome back! You can manage your tour inquiries and reservations here.</p>
            <div className="demo-user-card">
              <p><strong>Account:</strong> {email}</p>
              <p><strong>Type:</strong> {activeTab === 'traveler' ? 'VIP Traveler Member' : 'Authorized Agency Partner'}</p>
              <p><strong>Status:</strong> Active & Verified</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="btn-primary w-full mt-4"
            >
              Continue Browsing Tours
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

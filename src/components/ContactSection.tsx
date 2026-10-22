import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'BANGKOK (3D 2N)',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <RevealOnScroll animation="fade-right" duration={800} className="w-full">
            <div className="contact-info-col">
              <span className="contact-pretitle">GET IN TOUCH</span>
              <h2 className="contact-main-title">Ready to Plan Your Next Journey?</h2>
            <p className="contact-subtext">
              Speak with our senior tour executives today. We are always ready to tailor an unforgettable experience for you.
            </p>

            <div className="contact-cards-stack">
              <div className="contact-item-card">
                <div className="contact-item-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="contact-item-title">Call Our Direct Hotlines</h4>
                  <p className="contact-item-value">
                    <a href="tel:0112909010">0112 90 90 10</a> • <a href="tel:0716891891">0716 891 891</a>
                  </p>
                  <span className="contact-item-sub">Lines active 8:30 AM – 7:30 PM (Mon-Sat)</span>
                </div>
              </div>

              <div className="contact-item-card">
                <div className="contact-item-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="contact-item-title">Official Travel Inquiries</h4>
                  <p className="contact-item-value">
                    <a href="mailto:travels@nationwide.lk">travels@nationwide.lk</a>
                  </p>
                  <span className="contact-item-sub">Guaranteed reply within 2 business hours</span>
                </div>
              </div>

              <div className="contact-item-card">
                <div className="contact-item-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="contact-item-title">Colombo Head Office</h4>
                  <p className="contact-item-value">
                    Nationwide Travels, Level 4, Colombo 03, Sri Lanka
                  </p>
                  <span className="contact-item-sub">Walk-ins welcome with parking available</span>
                </div>
              </div>

              <div className="contact-item-card">
                <div className="contact-item-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="contact-item-title">Emergency Travel Desk</h4>
                  <p className="contact-item-value text-emerald-600 font-semibold">
                    24/7 Dedicated Ground Support
                  </p>
                  <span className="contact-item-sub">For travelers currently overseas</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="whatsapp-box-prompt">
              <a
                href="https://wa.me/94716891891?text=Hello%20Nationwide.lk,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
                target="_blank"
                rel="noreferrer"
                className="whatsapp-big-btn"
              >
                <MessageCircle size={22} />
                <span>Chat Instantly with an Agent on WhatsApp</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Column: Inquiry Form */}
        <RevealOnScroll animation="fade-left" duration={800} className="w-full">
          <div className="contact-form-col">
            <div className="inquiry-form-card">
              <h3 className="inquiry-card-title">Send Us a Direct Inquiry</h3>
              <p className="inquiry-card-sub">Get a customized itinerary and price quote in under 30 minutes.</p>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nimal Fernando"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label">Contact Number (WhatsApp)</label>
                      <input
                        type="tel"
                        required
                        placeholder="077 XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="nimal@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Interested Destination</label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="form-input"
                    >
                      <optgroup label="Europe Grand Tours">
                        <option value="EUROPEAN MARVELS (12D 11N)">EUROPEAN MARVELS (12D 11N) - UK, France, Swiss & Italy</option>
                        <option value="PARIS, MILAN, VENICE, FLORENCE & ROME (12D 11N)">PARIS, MILAN, VENICE, FLORENCE & ROME (12D 11N) - France & Italy</option>
                      </optgroup>
                      <optgroup label="Singapore Tours">
                        <option value="SINGAPORE (4D 3N)">SINGAPORE (4D 3N) - Gardens by the Bay & Universal</option>
                      </optgroup>
                      <optgroup label="Malaysia Tours">
                        <option value="MALAYSIA (4D 3N)">MALAYSIA (4D 3N) - Genting & Sunway Lagoon</option>
                        <option value="MALAYSIA (5D 4N)">MALAYSIA (5D 4N) - Genting, Sunway & KL Aquarium</option>
                      </optgroup>
                      <optgroup label="Dubai (UAE) Tours">
                        <option value="DUBAI (4D 3N)">DUBAI (4D 3N) - Marina Cruise & Burj Khalifa 124th</option>
                        <option value="DUBAI (5D 4N)">DUBAI (5D 4N) - Miracle Garden & Global Village</option>
                      </optgroup>
                      <optgroup label="India Tours">
                        <option value="KASHMIR & DELHI (6D 5N)">KASHMIR & DELHI (6D 5N) - Houseboat & Gondola</option>
                        <option value="GOLDEN TRIANGLE (5D 4N)">GOLDEN TRIANGLE (5D 4N) - Delhi, Agra & Jaipur</option>
                        <option value="DELHI + AGRA (4D 3N)">DELHI + AGRA (4D 3N) - Taj Mahal & Fort</option>
                        <option value="KERALA HIGHLIGHTS (5D 4N)">KERALA HIGHLIGHTS (5D 4N) - Backwaters Houseboat & Munnar</option>
                        <option value="CHANDIGARH, SHIMLA & MANALI (7D 6N)">CHANDIGARH, SHIMLA & MANALI (7D 6N) - Himalayas</option>
                        <option value="CHANDIGARH, SHIMLA & MANALI (6D 5N)">CHANDIGARH, SHIMLA & MANALI (6D 5N) - Himalayas</option>
                        <option value="BUDDHIST PILGRIMAGE (8D 7N)">BUDDHIST PILGRIMAGE (8D 7N) - Sacred Dambadiva</option>
                        <option value="CHENNAI SHOPPING (3D 2N)">CHENNAI SHOPPING (3D 2N) - Silk & Gold Spree</option>
                        <option value="CHENNAI SHOPPING (5D 4N)">CHENNAI SHOPPING (5D 4N) - Extended Shopping Tour</option>
                      </optgroup>
                      <optgroup label="Thailand Tours">
                        <option value="BANGKOK (3D 2N)">BANGKOK (3D 2N) - Thailand</option>
                        <option value="BANGKOK (4D 3N)">BANGKOK (4D 3N) - Thailand</option>
                        <option value="BANGKOK LEISURE (4D 3N)">BANGKOK LEISURE (4D 3N) - Thailand</option>
                        <option value="BANGKOK CITY EXPLORER (5D 4N)">BANGKOK CITY EXPLORER (5D 4N) - Thailand</option>
                        <option value="BANGKOK PATTAYA (5D 4N)">BANGKOK PATTAYA (5D 4N) - Thailand</option>
                        <option value="BANGKOK PHUKET (5D 4N)">BANGKOK PHUKET (5D 4N) - Thailand</option>
                        <option value="BANGKOK EXTRA TOUR (6D 5N)">BANGKOK EXTRA TOUR (6D 5N) - Thailand</option>
                        <option value="BANGKOK PATTAYA (7D 6N)">BANGKOK PATTAYA (7D 6N) - Thailand</option>
                      </optgroup>
                      <optgroup label="Other Options">
                        <option value="Custom">Custom Tailor-Made Tour</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Travel Plans / Preferences</label>
                    <textarea
                      rows={3}
                      placeholder="Approximate travel dates, number of people, preferred hotel category..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                    id="submit-inquiry-btn"
                  >
                    <Send size={18} />
                    <span>Send Travel Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="inquiry-success-box">
                  <CheckCircle2 size={52} className="text-emerald-500" />
                  <h4>Inquiry Sent Successfully!</h4>
                  <p>
                    Thank you <strong>{formData.name}</strong>. One of our destination specialists will call you on <strong>{formData.phone}</strong> shortly with custom itinerary details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="btn-secondary mt-3"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

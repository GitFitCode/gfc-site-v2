import React, { useState, useEffect, useCallback } from 'react';
import Logo from './logo';
import { HomeIcon, UserGroupIcon, CogIcon, ChatBubbleOvalLeftIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router';
import { FolderClosedIcon } from 'lucide-react';


const items = [
  { name: 'Home', icon: <HomeIcon className="h-6 w-6" />, route: '/', sectionId: 'gfc-intro-section', content: 'Home' },
  { name: 'About', icon: <UserGroupIcon className="h-6 w-6" />, route: '#about', sectionId: 'stats-section', content: 'About Us' },
  { name: 'Services', icon: <CogIcon className="h-6 w-6" />, route: '#services', sectionId: 'solutions-section', content: 'Services' },
  // { name: 'Testimonials', icon: <ChatBubbleOvalLeftIcon className="h-6 w-6" />, route: '#testimonials', sectionId: 'success-stories-section', content: 'Testimonials' },
  { name: 'Portfolio', icon: <FolderClosedIcon className="h-6 w-6" />, route: '/portfolio', sectionId: null, content: 'Portfolio' },
  { name: 'Contact', icon: <PhoneIcon className="h-6 w-6" />, route: '/contact', sectionId: null, content: 'Contact Us' },
];

interface MainNavProps {
  showNav: boolean;
  isDesktop: boolean;
}

export default function MainNav({ showNav, isDesktop }: MainNavProps) {
  const [selected, setSelected] = useState(items[0].name);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    // Update scrolled state for opcacity and shadow effect for nav
    setScrolled(window.scrollY > 50);
    // Find the section that is currently in view and update the selected state
    const sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom >= 0) { // Correct condition
        const sectionId = section.id;
        const matchingItem = items.find(item => item.sectionId === sectionId);
        if (matchingItem) {
          setSelected(matchingItem.name); // Update selected state
          return; // Exit the loop once a match is found
        }
      }
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to run only once on mount

  const handleSelect = useCallback(
    (itemName: string, sectionId: string | null, route: string) => {
      setSelected(itemName);

      const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 90;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: sectionTop - offset,
            behavior: 'smooth',
          });
        }
      };

      if (itemName === 'Contact') {
        navigate(route);
      } else if (sectionId) {
        if (window.location.pathname === '/') {
          scrollToSection(sectionId);
        } else {
          navigate('/');
          setTimeout(() => scrollToSection(sectionId), 500);
        }
      } else {
        navigate(route);
      }
    },
    [navigate]
  );

  return showNav ? (
    <div
      className={`fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-90 border-b-4 border-gfc-primary-100' : 'bg-white bg-opacity-100'
        } ${isDesktop ? 'lg:flex lg:flex-row lg:space-x-4 lg:justify-between lg:items-center lg:p-4 w-full' : 'flex flex-row items-center justify-between p-2 w-[97%]'}`}
    >
      <div className="flex items-center">
        <Logo setShowNav={() => { }} showNav={showNav} />
      </div>

      <div className={`flex ${isDesktop ? 'flex-row space-x-4' : 'flex-row space-x-3 mt-2'}`}>
        {items.map((item, index) => (
          item.name === 'Home' ? (
            <Link
              key={index}
              to={item.route}
              onClick={() => setSelected(item.name)}
              className={`flex items-center p-4 rounded-lg transition-all duration-300 ${selected === item.name ? 'bg-gfc-primary text-white' : 'bg-white text-gray-700'
                } ${isDesktop ? 'hover:bg-gfc-primary-100 hover:text-gfc-accent' : 'hover:bg-gfc-primary-100'}`}
            >
              {React.cloneElement(item.icon, {
                fill: selected === item.name ? 'white' : 'black',
                className: 'h-6 w-6',
              })}

              {isDesktop && (
                <span className={`ml-3 font-medium ${selected === item.name ? 'text-white' : 'text-gray-700'}`}>
                  {item.content}
                </span>
              )}
            </Link>
          ) : (
            <button
              key={index}
              onClick={() => handleSelect(item.name, item.sectionId, item.route)}
              className={`flex items-center p-4 rounded-lg transition-all duration-300 ${selected === item.name ? 'bg-gfc-accent text-white' : 'bg-white text-gray-700'
                } ${isDesktop ? 'hover:bg-gfc-primary-100 hover:text-gfc-accent' : 'hover:bg-gfc-primary-100'}`}
            >
              {React.cloneElement(item.icon, {
                fill: selected === item.name ? 'white' : 'black',
                className: 'h-6 w-6',
              })}

              {isDesktop && (
                <span className={`ml-3 font-medium ${selected === item.name ? 'text-white' : 'text-gray-700'}`}>
                  {item.content}
                </span>
              )}
            </button>
          )
        ))}
      </div>
    </div>
  ) : null;
}

import React, { useState } from 'react';
import { cn } from '../../lib/util';
import Magnetic from '../ui/Magnetic';
import { Button } from '../ui/Button';
import Modal from '../ui/Modal'; // Adjust the import path as necessary

const GoogleCalendarButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Magnetic>
        <Button
          onClick={handleClick}
          className={cn(
            'py-6 px-8 text-[20px]',
            'relative rounded-lg tracking-wide overflow-hidden duration-[2200ms] shadow-md',
            'text-white hover:bg-gfc-accent bg-neutral-800 uppercase font-black',
            'before:absolute before:inset-0 before:bg-[length:200%_100%] before:animate-bg-shine',
            'before:bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.4),55%,transparent)]'
          )}
        >
          Schedule
        </Button>
      </Magnetic>

      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0IuZ_FH2jWlBSXwfxonQ-fw8oZeZsM9Y81mN3A6RhPMNmIMQ3uMIIOXOW7luSH_Dr6rh1qcpxF?gv=true"
          width="100%"
          height="500"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default GoogleCalendarButton;
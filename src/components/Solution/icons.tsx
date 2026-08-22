export const SolutionIcons = {
  consulting: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <path d="M8 9h8"/>
      <path d="M8 13h5"/>
    </svg>
  ),

  tech: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M10 9.5l-2 2.5 2 2.5"/>
      <path d="M14 9.5l2 2.5-2 2.5"/>
    </svg>
  ),

  research: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="10" cy="10" r="7"/>
      <line x1="21" y1="21" x2="15" y2="15"/>
      <line x1="7" y1="11" x2="7" y2="12"/>
      <line x1="10" y1="8" x2="10" y2="12"/>
      <line x1="13" y1="6" x2="13" y2="12"/>
    </svg>
  ),

  capacity: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 3h20v11H2z"/>
      <path d="M12 14v4"/>
      <path d="M7 21l5-3 5 3"/>
      <path d="M7 8l3 3 7-6"/>
    </svg>
  )
  
};

export type SolutionIcon = keyof typeof SolutionIcons;

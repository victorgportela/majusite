export const theme = {
  colors: {
    primary: {
      // Tons de azul
      900: '#1e3a8a', // azul escuro
      800: '#1e40af',
      700: '#1d4ed8',
      600: '#2563eb',
      500: '#3b82f6',
      400: '#60a5fa',
      300: '#93c5fd',
      200: '#bfdbfe',
      100: '#dbeafe',
    },
    gold: {
      // Tons de dourado
      900: '#854d0e',
      800: '#92400e',
      700: '#a16207',
      600: '#ca8a04',
      500: '#eab308',
      400: '#facc15',
      300: '#fde047',
      200: '#fef08a',
      100: '#fef9c3',
    },
    neutral: {
      // Tons de branco/cinza
      900: '#1a1a1a',
      800: '#262626',
      700: '#404040',
      600: '#525252',
      500: '#737373',
      400: '#a3a3a3',
      300: '#d4d4d4',
      200: '#e5e5e5',
      100: '#f5f5f5',
      50: '#fafafa',
    },
    accent: '#eab308', // Dourado principal
    text: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      muted: '#d4d4d4',
      gold: '#eab308',
      dark: '#1a1a1a',
    },
    background: {
      primary: 'from-primary.900 via-primary.800 to-primary.900',
      secondary: 'from-neutral.50 to-neutral.100',
      tertiary: 'from-primary.800 to-primary.700',
      overlay: 'bg-neutral.900/50',
    },
    gradients: {
      goldLight: 'from-gold.200 via-gold.100 to-neutral.50',
      goldDark: 'from-gold.600 via-gold.500 to-gold.400',
      blueGold: 'from-primary.800 via-primary.700 to-gold.600',
    },
  },
  colors: {
    primary: {
      900: '#1e3a8a', // blue-900
      800: '#1e40af', // blue-800
      700: '#1d4ed8', // blue-700
      600: '#2563eb', // blue-600
      500: '#3b82f6', // blue-500
      400: '#60a5fa', // blue-400
      300: '#93c5fd', // blue-300
      200: '#bfdbfe', // blue-200
    },
    accent: '#38bdf8', // sky-400
    text: {
      primary: '#ffffff',
      secondary: '#e5e7eb', // gray-200
      muted: '#9ca3af', // gray-400
    },
    background: {
      primary: 'from-blue-900 via-blue-800 to-blue-900',
      secondary: 'from-blue-800 to-blue-700',
      tertiary: 'from-blue-700 to-blue-600',
    },
    overlay: {
      light: 'bg-white/10',
      medium: 'bg-blue-800/30',
      dark: 'bg-blue-900/40',
    }
  },
  fonts: {
    heading: 'font-poppins',
    body: 'font-inter',
  },
  textStyles: {
    h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
    h2: 'text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl font-bold',
    body: 'text-lg leading-relaxed',
    caption: 'text-sm',
  },
  effects: {
    glass: {
      light: 'backdrop-blur-md bg-white/10',
      dark: 'backdrop-blur-md bg-neutral.900/30',
      gold: 'backdrop-blur-md bg-gold.500/20',
    },
    blur: {
      sm: 'blur-sm',
      md: 'blur-xl',
      lg: 'blur-3xl',
    },
    hover: {
      scale: 'hover:scale-105 transition-transform duration-300',
      glow: 'hover:shadow-lg hover:shadow-gold.500/20 transition-shadow duration-300',
      border: 'hover:border-gold.500 transition-colors duration-300',
      text: 'hover:text-gold.400 transition-colors duration-300',
    }
  }
} as const;

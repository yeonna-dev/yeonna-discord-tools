module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          light: 'var(--color-primary-light)',
        },
        bg: {
          DEFAULT: 'var(--color-bg)',
          dark: 'var(--color-bg-dark)',
          darker: 'var(--color-bg-darker)',
          'dark-hover': 'var(--color-bg-dark-hover)',
          light: 'var(--color-bg-light)',
          lighter: 'var(--color-bg-lighter)',
        },
        white: 'var(--color-white)',
      },
      maxWidth: {
        'xxs': '16rem'
      },
    },
    ringColor: {
      DEFAULT: '#f6938a',
      primary: 'var(--color-primary)'
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
};

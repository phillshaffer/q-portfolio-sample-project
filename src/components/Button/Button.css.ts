import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: vars.borderRadius.md,
  fontWeight: vars.fontWeights.medium,
  transition: 'all 0.3s ease',
  border: 'none',
  cursor: 'pointer',
  fontSize: vars.fontSizes.md,
  textAlign: 'center',
  ':hover': {
    transform: 'translateY(-2px)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
});

export const buttonVariants = styleVariants({
  primary: [
    baseButton,
    {
      backgroundColor: vars.colors.primary,
      color: vars.colors.white,
      ':hover': {
        backgroundColor: '#2980b9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  ],
  secondary: [
    baseButton,
    {
      backgroundColor: 'transparent',
      color: vars.colors.primary,
      border: `2px solid ${vars.colors.primary}`,
      ':hover': {
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
      },
    },
  ],
  outline: [
    baseButton,
    {
      backgroundColor: 'transparent',
      color: vars.colors.text,
      border: `1px solid ${vars.colors.textLight}`,
      ':hover': {
        borderColor: vars.colors.primary,
        color: vars.colors.primary,
      },
    },
  ],
});

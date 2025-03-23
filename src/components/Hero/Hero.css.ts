import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const heroContainer = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${vars.space.xl} ${vars.space.md}`,
  background: `linear-gradient(135deg, ${vars.colors.background} 0%, #e6f7ff 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '@media': {
    '(min-width: 768px)': {
      padding: `${vars.space.xxl} ${vars.space.xl}`,
    },
  },
});

export const heroContent = style({
  maxWidth: '1200px',
  width: '100%',
  textAlign: 'center',
  zIndex: 1,
  '@media': {
    '(min-width: 768px)': {
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: vars.space.xxl,
    },
  },
});

export const heroTextContainer = style({
  marginBottom: vars.space.xl,
  '@media': {
    '(min-width: 768px)': {
      flex: '1 1 60%',
      marginBottom: 0,
    },
  },
});

export const heroImageContainer = style({
  display: 'none',
  '@media': {
    '(min-width: 768px)': {
      display: 'block',
      flex: '1 1 40%',
    },
  },
});

export const heroTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space.md,
  color: vars.colors.text,
  lineHeight: 1.2,
  '@media': {
    '(min-width: 768px)': {
      fontSize: vars.fontSizes.xxxxl,
    },
  },
});

export const heroSubtitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.medium,
  marginBottom: vars.space.lg,
  color: vars.colors.primary,
  '@media': {
    '(min-width: 768px)': {
      fontSize: vars.fontSizes.xxl,
    },
  },
});

export const heroDescription = style({
  fontSize: vars.fontSizes.md,
  marginBottom: vars.space.xl,
  maxWidth: '600px',
  margin: '0 auto',
  color: vars.colors.textLight,
  '@media': {
    '(min-width: 768px)': {
      margin: '0 0 2rem 0',
      fontSize: vars.fontSizes.lg,
    },
  },
});

export const heroImage = style({
  width: '100%',
  height: 'auto',
  borderRadius: vars.borderRadius.lg,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
});

export const heroBackground = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  opacity: 0.5,
});

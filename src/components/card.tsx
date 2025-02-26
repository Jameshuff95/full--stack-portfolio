import styles from '@/app/ui/css_modules/card.module.css';

type CardProps = {
  className: string;
  children?: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={`${className} ${styles.card}`}>
      {children}
    </div>
  )
}
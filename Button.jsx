export default function Button({
  as = 'a',
  href,
  variant = 'primary',
  children,
  icon,
  onClick,
  className = '',
  ...rest
}) {
  const Tag = as;
  const classes = `btn btn--${variant} ${className}`.trim();

  return (
    <Tag href={href} onClick={onClick} className={classes} {...rest}>
      {icon && <span className="btn__icon">{icon}</span>}
      <span>{children}</span>
    </Tag>
  );
}

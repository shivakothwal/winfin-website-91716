interface VinFinTextProps {
  showConsultancy?: boolean;
  consultancyText?: string;
  className?: string;
  consultancyClassName?: string;
}

const VinFinText = ({ 
  showConsultancy = false, 
  consultancyText = "Consultancy Services", 
  className = "",
  consultancyClassName = "text-muted-foreground"
}: VinFinTextProps) => {
  return (
    <span className={`inline ${className}`}>
      <span className="text-vinfin-dark">Vin</span>
      <span className="text-vinfin-light">Fin</span>
      {showConsultancy && (
        <span className={`${consultancyClassName}`}> {consultancyText}</span>
      )}
    </span>
  );
};

export default VinFinText;
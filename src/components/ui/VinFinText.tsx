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
    <div className={`flex flex-col ${className}`}>
      <div className="leading-tight">
        <span className="text-vinfin-dark">Vin</span>
        <span className="text-vinfin-light">Fin</span>
      </div>
      {showConsultancy && (
        <div className={`text-sm leading-tight -mt-1 ${consultancyClassName}`}>{consultancyText}</div>
      )}
    </div>
  );
};

export default VinFinText;
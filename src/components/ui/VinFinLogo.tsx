import vinfinLogo from "@/assets/vinfin-new-logo.png";
import VinFinText from "./VinFinText";

interface VinFinLogoProps {
  showLogo?: boolean;
  logoSize?: string;
  textSize?: string;
  showConsultancy?: boolean;
  className?: string;
}

const VinFinLogo = ({ 
  showLogo = true, 
  logoSize = "h-12 sm:h-16", 
  textSize = "text-2xl sm:text-4xl", 
  showConsultancy = true,
  className = ""
}: VinFinLogoProps) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-4 ${className}`}>
      {showLogo && (
        <img 
          src={vinfinLogo} 
          alt="VinFin Consultancy Logo" 
          className={`${logoSize} w-auto bg-transparent flex-shrink-0`}
          style={{ backgroundColor: 'transparent' }}
        />
      )}
      <VinFinText 
        showConsultancy={showConsultancy}
        consultancyText="Consultancy Services"
        className={`${textSize} font-bold`}
        consultancyClassName="text-muted-foreground text-sm sm:text-base"
      />
    </div>
  );
};

export default VinFinLogo;
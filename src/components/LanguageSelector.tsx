import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LANGUAGES } from '@/types/language';
import { useLanguage } from '@/hooks/useLanguage';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const currentLang = LANGUAGES.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-lg hover:bg-card">
          {currentLang?.flag}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="card-gradient border border-primary/20">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="cursor-pointer hover:bg-primary/10 flex items-center gap-2"
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
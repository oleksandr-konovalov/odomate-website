import { useState, PropsWithChildren } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const StoreComingSoonDialog = ({ children }: PropsWithChildren) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const title = (t as any).store?.comingSoonTitle || 'Coming soon';
  const text = (t as any).store?.comingSoonText || 'The app is not yet available in the store. Please check back soon.';
  const ok = (t as any).store?.ok || 'OK';

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="block">
        {children}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{text}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>{ok}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

import { useEffect, useState } from 'react';

export default function useSiteScopeContext() {
  const [siteScope, setSiteScope] = useState<'ricevimento' | 'dolce'>('ricevimento');

  useEffect(() => {
    if (window.location.hostname === 'wedding-marta-daniele.vercel.app') {
      setSiteScope('ricevimento');
    } else if (window.location.hostname === '3settembre-marta-daniele.vercel.app') {
      setSiteScope('dolce');
    } else if (window.location.search === '?cake') {
      setSiteScope('dolce');
    }
  }, []);

  return siteScope;
}

import { useEffect, useMemo } from "react";
import { create } from "zustand";
import { Passport } from "@credenza-web3/passport";

const PASSPORT_CHAIN_ID = "80001";

const useCredenzaPassportStore = create((set) => ({
  credenzaPassport: null,
  setCredenzaPassport: (credenzaPassport) => set({ credenzaPassport }),
}));

export function CredenzaPassport() {
  const { credenzaPassport, setCredenzaPassport } = useCredenzaPassportStore();
  const passport = useMemo(
    () => new Passport({ chainId: PASSPORT_CHAIN_ID }),
    []
  );

  useEffect(() => {
    passport.init().then(() => setCredenzaPassport(passport));
  }, [passport, setCredenzaPassport]);

  useEffect(() => {
    if (!credenzaPassport) return;
    credenzaPassport.showNavigation(
      {},
      {
        minimization: {
          enabled: false,
          toggler: {
            enabled: true,
          },
        },
      }
    );
  }, [credenzaPassport]);

  return null;
}

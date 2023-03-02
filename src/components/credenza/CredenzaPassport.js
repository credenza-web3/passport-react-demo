import { useEffect, useMemo } from "react";
import { Passport } from "@credenza-web3/passport";
import { useCredenzaPassportStore } from "../../stores/credenza";

const PASSPORT_CHAIN_ID = "80001";

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

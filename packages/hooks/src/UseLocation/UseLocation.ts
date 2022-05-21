import { useEffect, useState } from 'react';

type RouteValue = string | null;

interface ReturnType {
  pathname?: RouteValue;
  host?: RouteValue;
  hostname?: RouteValue;
  port?: RouteValue;
  protocol?: RouteValue;
  origin?: RouteValue;
  href?: RouteValue;
  hash?: RouteValue;
}

function useLocation(): ReturnType {
  const [pathname, setPathname] = useState<RouteValue>(null);
  const [host, setHost] = useState<RouteValue>(null);
  const [hostname, setHostname] = useState<RouteValue>(null);
  const [port, setPort] = useState<RouteValue>(null);
  const [protocol, setProtocol] = useState<RouteValue>(null);
  const [origin, setOrigin] = useState<RouteValue>(null);
  const [href, setHref] = useState<RouteValue>(null);
  const [hash, setHash] = useState<RouteValue>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
    setHost(window.location.host);
    setHostname(window.location.hostname);
    setPort(window.location.port);
    setProtocol(window.location.protocol);
    setOrigin(window.location.origin);
    setHref(window.location.href);
    setHash(window.location.hash);
  }, []);

  return { pathname, host, hostname, port, protocol, origin, href, hash };
}

export default useLocation;

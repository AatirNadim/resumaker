import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {
  to?: string;
}

const Navigate = ({ to }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to || "/");
  }, []);

  return null;
};

export default Navigate;

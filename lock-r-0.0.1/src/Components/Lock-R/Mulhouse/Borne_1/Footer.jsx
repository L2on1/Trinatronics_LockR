import React from "react";
import { Table, TableBody, TableFooter } from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
  return (
    <div>
      Footer
      <TableFooter component={Box}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody> Salut</TableBody>
          <TableBody> Hello</TableBody>
          <TableBody> Coucou</TableBody>
        </Table>
      </TableFooter>
    </div>
  );
}

export default Footer;

import { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { useDebounce } from 'hooks';
import styles from './App.module.scss';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  return (
    <Paper classes={{ root: styles.paperRoot }}>
      <TextField
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <span className={styles.selectedPairTitle}>
        Selected pair: {debouncedSearchQuery}
      </span>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow className={styles.headTableRow}>
              <TableCell>Provider</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Binance</TableCell>
              <TableCell>200</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

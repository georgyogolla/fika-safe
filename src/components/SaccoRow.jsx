import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import EditIcon from './EditIcon.jsx';
import CheckBox from './CheckBox.jsx';
import DeleteIcon from './DeleteIcon.jsx';

const SaccoRow = ({ sacco, deleteSacco }) => {
  return (
    <TableRow>
      <TableCell align="left">
        <CheckBox />
      </TableCell>
      <TableCell component="th" scope="sacco">
        {sacco.name}
      </TableCell>
      <TableCell align="left">{sacco.registration_number}</TableCell>
      <TableCell align="left">{sacco.address}</TableCell>
      <TableCell align="left">{sacco.contacts.telephone_number}</TableCell>
      <TableCell align="left">{sacco._id}</TableCell>
      <TableCell align="left">
        <DeleteIcon removeSacco={deleteSacco} id={sacco._id} />
      </TableCell>
      <TableCell align="left">
        <EditIcon />
      </TableCell>
    </TableRow>
  );
};
SaccoRow.propTypes = {
  sacco: PropTypes.object.isRequired
};

export default SaccoRow;

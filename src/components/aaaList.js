import React, { useState, useEffect } from 'react';
import PageHeader from "./PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import Controls from "./controls/Controls";
import { Search } from "@material-ui/icons";
import {useDispatch, useSelector} from 'react-redux';
import { fetchUsers } from "../store/bbb";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))


const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department', disableSorting: true },
]

const Employees = () => {
    // const dispatch = useDispatch();
    // const {users,isLoading} = useSelector(state => ({users:state.users, isLoading: state.isLoading}));
    // const { records } = useSelector(state => state.users);
    // const classes = useStyles();
    // const [records, setRecords] = useState(employeeService.getAllEmployees())
    // const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    // const {
    //     TblContainer,
    //     TblHead,
    //     TblPagination,
    //     recordsAfterPagingAndSorting
    // } = useTable(records, headCells, filterFn);

    // useEffect(() => {
    //     dispatch(fetchUsers());
    //   }, [dispatch]);

    // const handleSearch = e => {
    //     let target = e.target;
    //     setFilterFn({
    //         fn: items => {
    //             if (target.value == "")
    //                 return items;
    //             else
    //                 return items.filter(x => x.fullName.toLowerCase().includes(target.value))
    //         }
    //     })
    // }

    //return (
        // <>
        //     <PageHeader
        //         title="New Employee"
        //         subTitle="Form design with validation"
        //         icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        //     />
            
        // </>
    //     <table>
    //   <thead>
    //     <tr>
    //       <td>ID</td>
    //       <td>Name</td>
    //       <td>Phone</td>
    //     </tr>
    //   </thead>
    //   {!isLoading ? (
    //     <tbody>
    //       {users.map(user => (
    //         <div />
    //       ))}
    //     </tbody>
    //   ) : (
    //     <div>Loading...</div>
    //   )}
    // </table>
    // );


    const dispatch = useDispatch();
  const { users, isLoading } = useSelector(state => state.hhhhh);
  const classes = useStyles();
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

  useEffect(() => {
       dispatch(fetchUsers());
     }, [dispatch]);

const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(users, headCells, filterFn);

    const handleSearch = e => {
      let target = e.target;
      setFilterFn({
          fn: items => {
              if (target.value == "")
                  return items;
              else
                  return items.filter(x => x.name.toLowerCase().includes(target.value) || x.phone.toLowerCase().includes(target.value))
          }
      })
  }

  return (
    <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
  );

};

export default Employees;

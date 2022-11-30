import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
import SearchBar from "../../Search/Search";
import { useDispatch } from "react-redux";
// import { FILTER_TOOLS } from "../../../redux/features/tool/filterSlice";
import { confirmAlert } from "react-confirm-alert";
import { deleteTool, getTools } from "../../../redux/features/tool/toolSlice";
import { Link } from "react-router-dom";
import './toollist.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Visibility from "@mui/icons-material/Visibility";
import { 
    Container,
    Grid,
    Stack,
    Typography,
     }
     from '@mui/material';

     const theme = createTheme({
        palette: {
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                blue: '#33bfff'
            },
        },
    });

const ToolList = ({ tools, isLoading }) => {
    const [search, setSearch] = useState("");
    // const filteredTools = useSelector(selectFilteredTools);

    const dispatch = useDispatch();

    const delTool = async (id) => {
        console.log(id);
        await dispatch(deleteTool(id));
        await dispatch(getTools());
    };

    const confirmDelete = (id) => {
        confirmAlert({
            title: "Delete Tool",
            message: "Are you sure???",
            buttons: [
                {
                    label: "Delete",
                    onClick: () => delTool(id),
                },
                {
                    label: "Cancel",
                },
            ],
        });
    };
// Begin Pagination
const [currentItems, setCurrentItems] = useState([]);
// const [pageCount, setPageCount] = useState(0);
// const [itemOffset, setItemOffset] = useState(0);
// const itemsPerPage = 5;

// useEffect(() => {
//   const endOffset = itemOffset + itemsPerPage;

//   setCurrentItems(filteredTools.slice(itemOffset, endOffset));
//   setPageCount(Math.ceil(filteredTools.length / itemsPerPage));
// }, [itemOffset, itemsPerPage, filteredTools]);

// const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % filteredTools.length;
//     setItemOffset(newOffset);
// };
// end pageination

// useEffect(() => {
//     dispatch(FILTER_TOOLS({ tools, search }));
// }, [tools, search, dispatch]);


return (
    <ThemeProvider theme={theme}>
    <Container>
        <br/>
        <Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={30}>
        <Grid item xs={4}>
            <div>
            <Typography variant="h3" style={{ fontFamily: 'Antonio' }}>Tools</Typography>
            </div>
        </Grid>
        <Grid item xs={8}>
            <div><SearchBar 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    /></div>
        </Grid>
        </Stack>
        <br/>
        <hr/>
        <Grid container>
        <div className="table">
          {!isLoading && tools.length === 0 ? (
            <p>-- No tool found, please add a tool...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  {/* <th>s/n</th> */}
                  <th>Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((tool, index) => {
                  const { _id, name, category, quantity } = tool;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{category}</td>
                      <td>{quantity}</td>
                      <td className="icons">
                        <span>
                          <Link to={`/tool-detail/${_id}`}>
                            <Visibility size={25} style={{ color: "secondary.blue" }} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-tool/${_id}`}>
                            <Edit size={20} style={{ color: "green" }} />
                          </Link>
                        </span>
                        <span>
                          <Delete
                            size={20}
                            style={{ color: "secondary.main" }}
                            onClick={() => confirmDelete(_id)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          </div>
        </Grid>
        {/* <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        /> */}
    </Container>
    </ThemeProvider>
);
};

export default ToolList;

// import DOMPurify from "dompurify";

// Card,
//     CardMedia,
//     CardContent,
//     IconButton


// {tools &&
//     tools.map(tool => (

//         <Card key={tool._id}
//                 sx={{ maxWidth: 320 }}>
//             <CardMedia
//                 component="img"
//                 height="120">
//                     {tool?.image ? (
//                         <img
//                         src={tool.image.filePath}
//                         alt={tool.image.fileName}
//                         />
//                     ) : (
//                         <p>No image for this Tool</p>
//                     )}
//                 </CardMedia>
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {tool.name}
//                     </Typography>
//                     <hr />
//                     <Typography variant="h5" component="div">
//                         Tool Availability: {stockStatus(tool.quantity)}
//                     </Typography>
//                     <hr />
//                     <Typography variant="h6" component="div">
//                         <b>&arr; Category: </b> {tool.category}
//                     </Typography>
//                     <Typography variant="h6" component="div">
//                         <b>&arr; Quantity in stock: </b> {tool.quantity}
//                     </Typography>
//                     <Typography variant="body2"
//                     dangerouslySetInnerHTML={{
//                         __html: DOMPurify.sanitize(tool.description),
//                             }}></Typography>
//                     <hr />
//                 </CardContent>
//                 <hr />
//                 <Grid container justifyContent="space-between">
//                     <IconButton  >
//                         {/* <Link to={`/edit-tool/${_id}`}> */}
//                         <Edit/>
//                         {/* </Link> */}
//                     </IconButton>
//                     <IconButton onClick={() => confirmDelete(tool)}>
//                         <Delete />
//                     </IconButton>
//                 </Grid>
//                 </Card>
//     ))}
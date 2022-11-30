// import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// import Search from "../../Search/Search";
// import { useDispatch, useSelector } from "react-redux";
// import Edit from "@mui/icons-material/Edit";
// import Delete from "@mui/icons-material/Delete";
// import { FILTER_TOOLS, selectFilteredTools, } from "../../../redux/features/tool/filterSlice";
// import { confirmAlert } from "react-confirm-alert";
// import { deleteTool, getTools } from "../../../redux/features/tool/toolSlice";
// // import { Link } from "react-router-dom";
// import DOMPurify from "dompurify";
// import { 
//     Container,
//     Grid,
//     Typography,
//     Card,
//     CardMedia,
//     CardContent,
//     IconButton }
//      from '@mui/material';

// const ToolList = ({ tools }) => {
//     const [search, setSearch] = useState("");
//     const filteredTools = useSelector(selectFilteredTools);

//     const dispatch = useDispatch();

//     const delTool = async (id) => {
//         console.log(id);
//         await dispatch(deleteTool(id));
//         await dispatch(getTools());
//     };

//     const confirmDelete = (id) => {
//         confirmAlert({
//             title: "Delete Tool",
//             message: "Are you sure???",
//             buttons: [
//                 {
//                     label: "Delete",
//                     onClick: () => delTool(id),
//                 },
//                 {
//                     label: "Cancel",
//                 },
//             ],
//         });
//     };
// // Begin Pagination
// // const [currentItems, setCurrentItems] = useState([]);
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
// // end pageination

// useEffect(() => {
//     dispatch(FILTER_TOOLS({ tools, search }));
// }, [tools, search, dispatch]);

// const stockStatus = (quantity) => {
//     if (quantity > 0) {
//       return <span className="--color-success">In Stock</span>;
//     }
//     return <span className="--color-danger">Out Of Stock</span>;
//   };

// return (
//     <Container>
//         <Grid item xs={4}>
//             <div>
//             <Typography variant="h3">Tools</Typography>
//             </div>
//         </Grid>
//         <Grid item xs={8}>
//             <div><Search 
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     /></div>
//         </Grid>
//         <Grid container>
//             {tools &&
//                 tools.map(tool => (

//                     <Card key={tool._id}
//                             sx={{ maxWidth: 320 }}>
//                         <CardMedia
//                             component="img"
//                             height="120">
//                                 {tool?.image ? (
//                                     <img
//                                     src={tool.image.filePath}
//                                     alt={tool.image.fileName}
//                                     />
//                                 ) : (
//                                     <p>No image for this Tool</p>
//                                 )}
//                             </CardMedia>
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {tool.name}
//                                 </Typography>
//                                 <hr />
//                                 <Typography variant="h5" component="div">
//                                     Tool Availability: {stockStatus(tool.quantity)}
//                                 </Typography>
//                                 <hr />
//                                 <Typography variant="h6" component="div">
//                                     <b>&arr; Category: </b> {tool.category}
//                                 </Typography>
//                                 <Typography variant="h6" component="div">
//                                     <b>&arr; Quantity in stock: </b> {tool.quantity}
//                                 </Typography>
//                                 <Typography variant="body2"
//                                 dangerouslySetInnerHTML={{
//                                     __html: DOMPurify.sanitize(tool.description),
//                                         }}></Typography>
//                                 <hr />
//                             </CardContent>
//                             <hr />
//                             <Grid container justifyContent="space-between">
//                                 <IconButton  >
//                                     {/* <Link to={`/edit-tool/${_id}`}> */}
//                                     <Edit/>
//                                     {/* </Link> */}
//                                 </IconButton>
//                                 <IconButton onClick={() => confirmDelete(tool)}>
//                                     <Delete />
//                                 </IconButton>
//                             </Grid>
//                             </Card>
//                 ))}
//         </Grid>
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="Next"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={3}
//           pageCount={pageCount}
//           previousLabel="Prev"
//           renderOnZeroPageCount={null}
//           containerClassName="pagination"
//           pageLinkClassName="page-num"
//           previousLinkClassName="page-num"
//           nextLinkClassName="page-num"
//           activeLinkClassName="activePage"
//         />
//     </Container>

// );
// };

// export default ToolList;
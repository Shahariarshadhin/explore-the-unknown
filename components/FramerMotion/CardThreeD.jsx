// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
// } from "@mui/material";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import Image from "next/image";
// import Piku from "../FramerMotion/@media/piku.png";

// const CardThreeD = () => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-100, 100], [30, -30]);
//   const rotateY = useTransform(x, [-100, 100], [-30, 30]);
//   return (
//     <div className="flex justify-center mt-72 ">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 " >
//       <motion.div
//         style={{ x, y, rotateX, rotateY, z: 100 }}
//         drag
//         dragElastic={0.18}
//         dragConstraints={{top:20, left:20, right: 20, bottom:20}}
//         className="relative"
//       >
//         <Card sx={{ maxWidth: 345 }}>
//           <CardContent>
//             <div gutterBottom variant="h5" component="div">
//               Lizard
//             </div>
//             <div variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </div>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//           </CardActions>

//           <CardMedia
//             sx={{ height: 240 }}
//             image="https://bikekhoj.com/wp-content/uploads/2022/09/MT-15-V2-Model-Image.jpg"
//             title="green iguana"
//           />
        
//         </Card>
//       </motion.div>
//       <motion.div
//         style={{ x, y, rotateX, rotateY, z: 100 }}
//         drag
//         dragElastic={0.18}
//         dragConstraints={{top:20, left:20, right: 20, bottom:20}}
//         className="relative"
//       >
//         <Card sx={{ maxWidth: 345 }}>
//           <CardContent>
//             <div gutterBottom variant="h5" component="div">
//               Lizard
//             </div>
//             <div variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </div>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//           </CardActions>

//           <CardMedia
//             sx={{ height: 240 }}
//             image="https://bikekhoj.com/wp-content/uploads/2022/09/MT-15-V2-Model-Image.jpg"
//             title="green iguana"
//           />
        
//         </Card>
//       </motion.div>
//       <motion.div
//         style={{ x, y, rotateX, rotateY, z: 100 }}
//         drag
//         dragElastic={0.18}
//         dragConstraints={{top:20, left:20, right: 20, bottom:20}}
//         className="relative"
//       >
//         <Card sx={{ maxWidth: 345 }}>
//           <CardContent>
//             <div gutterBottom variant="h5" component="div">
//               Lizard
//             </div>
//             <div variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </div>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//           </CardActions>

//           <CardMedia
//             sx={{ height: 240 }}
//             image="https://bikekhoj.com/wp-content/uploads/2022/09/MT-15-V2-Model-Image.jpg"
//             title="green iguana"
//           />
        
//         </Card>
//       </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CardThreeD;

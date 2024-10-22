import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton"; // Import IconButton for the logout button
import LogoutIcon from "@mui/icons-material/Logout"; // Import Logout Icon
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { createTheme } from "@mui/material/styles"; // Import createTheme from Material-UI
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// Define the navigation items
const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

// Create a theme for the layout
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Define the page content
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

// Define the Dashboard layout with Logout functionality
function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const navigate = useNavigate(); // Use navigate to handle routing

  const demoWindow = window !== undefined ? window() : undefined;

  // Logout function to clear token and redirect to login
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear authentication token
    navigate("/"); // Redirect to login page
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      {/* Small Logout Button at the top right */}
      <DashboardLayout
        toolbar={
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0 16px",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <IconButton onClick={handleLogout} color="inherit" size="medium">
              <LogoutIcon />
            </IconButton>
          </Box>
        }
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;

// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { createTheme } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import LogoutIcon from "@mui/icons-material/Logout"; // Import Logout Icon
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { useDemoRouter } from "@toolpad/core/internal";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// // Define the navigation items
// const NAVIGATION = (handleLogout) => [
//   {
//     kind: "header",
//     title: "Main items",
//   },
//   {
//     segment: "dashboard",
//     title: "Dashboard",
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: "orders",
//     title: "Orders",
//     icon: <ShoppingCartIcon />,
//   },
//   {
//     kind: "divider",
//   },
//   {
//     segment: "logout", // Logout item
//     title: "Logout",
//     icon: <LogoutIcon />, // Icon for Logout
//     onClick: handleLogout, // Trigger the logout function
//   },
//   {
//     kind: "divider",
//   },
//   {
//     kind: "header",
//     title: "Analytics",
//   },
//   {
//     segment: "reports",
//     title: "Reports",
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: "sales",
//         title: "Sales",
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: "traffic",
//         title: "Traffic",
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
//   {
//     segment: "integrations",
//     title: "Integrations",
//     icon: <LayersIcon />,
//   },
// ];

// // Create a theme for the layout
// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: "data-toolpad-color-scheme",
//   },
//   colorSchemes: { light: true, dark: true },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// // Define the page content
// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };

// // Define the Dashboard layout with Logout functionality
// function DashboardLayoutBasic(props) {
//   const { window } = props;
//   const router = useDemoRouter("/dashboard");
//   const navigate = useNavigate(); // Use navigate to handle routing

//   const demoWindow = window !== undefined ? window() : undefined;

//   // Logout function to clear token and redirect to login
//   const handleLogout = () => {
//     localStorage.removeItem("authToken"); // Clear authentication token
//     navigate("/"); // Redirect to login page
//   };

//   return (
//     <AppProvider
//       navigation={NAVIGATION(handleLogout)} // Pass the logout function to NAVIGATION
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <DemoPageContent pathname={router.pathname} />
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

// DashboardLayoutBasic.propTypes = {
//   window: PropTypes.func,
// };

// export default DashboardLayoutBasic;

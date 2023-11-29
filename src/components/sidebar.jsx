import { Drawer, Stack, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoneyIcon from "@mui/icons-material/Money";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import WalletSharpIcon from "@mui/icons-material/WalletSharp";
import "../assets/people.png";

const drawerWidth = 240;

function Sidebar() {

  const handleItemClick = (index) => {
    setSelectedItem(index);
  }

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            overflow: "auto",
            ml: 1,
            bgcolor: "#29221D",
            padding: 2.0,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          },
        }}
      >
        <Stack
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Stack>
            <Stack
              spacing={2}
              justifyContent="center"
              direction="row"
              alignItems="center"
              mb={2}
            >
              
              <Typography variant="h5" color="#FFFFFF">
                <img
                src="/src/assets/people.png"
                alt=""
                style={{
                  width: "70px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
                Username
              </Typography>
            </Stack>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <HomeRoundedIcon color="" />
            <Typography variant="h6" color="#FFFFFF">
              Home
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <ChecklistIcon />
            <Typography variant="h6" color="#FFFFFF">
              Budget
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <SendRoundedIcon />
            <Typography variant="h6" color="#FFFFFF">
              Transactions
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <CreditCardIcon />
            <Typography variant="h6" color="#FFFFFF">
              Subscriptions
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <MoneyIcon />
            <Typography variant="h6" color="#FFFFFF">
              Loans
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <ShowChartSharpIcon />
            <Typography variant="h6" color="#FFFFFF">
              Reports
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <WalletSharpIcon />
            <Typography variant="h6" color="#FFFFFF">
              Savings
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <QuestionMarkRoundedIcon />
            <Typography variant="h6" color="#FFFFFF">
              Financial Advice
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <AccountCircleRoundedIcon />
            <Typography variant="h6" color="#FFFFFF">
              Account
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            justifyContent="flex-start"
            direction="row"
            alignItems="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FE6C00")
} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} 
            sx={{
              transition: "background-color 0.3s ease",
              borderRadius: 2,
              padding: 1,
              width: 190,
            }}
          >
            <SettingsIcon />
            <Typography variant="h6" color="#FFFFFF">
              Settings
            </Typography>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}

export default Sidebar;

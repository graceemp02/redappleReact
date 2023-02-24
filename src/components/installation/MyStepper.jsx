/** @format */

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Box,
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FifthPage, FirstPage, FourthPage, SecondPage, SixPage, ThirdPage } from '../installation';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const theme = createTheme({ typography: { fontSize: 14, button: { textTransform: 'none' } } });

const steps = [
  'Planning',
  'Approved Design',
  'Installation Company',
  'Payment Schedule',
  'Certificate Issuance',
  'Inspector Data',
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: '1.7vh',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.7vh',
  },
}));

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const id = localStorage.getItem('id');

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 1 }}>
        <Stepper
          sx={{
            paddingBlock: '2vh',
            overflow: 'hidden',
            width: '100%',
            overflowX: { xs: 'auto', sm: 'hidden' },
          }}
          nonLinear
          alternativeLabel
          activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color='inherit' onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Field</StyledTableCell>
                      <StyledTableCell align='left'>Data</StyledTableCell>
                      <StyledTableCell align='right'>Status</StyledTableCell>
                    </TableRow>
                  </TableHead>

                  {activeStep === 0 ? (
                    <FirstPage />
                  ) : activeStep === 1 ? (
                    <SecondPage />
                  ) : activeStep === 2 ? (
                    <ThirdPage />
                  ) : activeStep === 3 ? (
                    <FourthPage />
                  ) : activeStep === 4 ? (
                    <FifthPage />
                  ) : (
                    <SixPage />
                  )}
                </Table>
              </TableContainer>

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  // color='inherit'
                  variant='contained'
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}>
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                  variant='contained'
                  onClick={handleNext}
                  sx={{ mr: 1 }}
                  disabled={activeStep + 1 === steps.length}>
                  Next
                </Button>
                {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                    <Typography variant='caption' sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                    </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                    </Button>
                ))} */}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </ThemeProvider>
  );
}

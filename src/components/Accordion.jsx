import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition({title,description}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div>
            {title&&(
                <Accordion
                    expanded={expanded}
                    onChange={handleExpansion}
                    slots={{ transition: Fade }}
                    slotProps={{ transition: { timeout: 400 } }}
                    sx={[
                        expanded
                            ? {
                                [`& .${accordionClasses.region}`]: {
                                    height: 'auto',
                                },
                                [`& .${accordionDetailsClasses.root}`]: {
                                    display: 'block',
                                },
                            }
                            : {
                                [`& .${accordionClasses.region}`]: {
                                    height: 0,
                                },
                                [`& .${accordionDetailsClasses.root}`]: {
                                    display: 'none',
                                },
                            },
                    ]}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"

                    >
                        <Typography>{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}

        </div>
    );
}

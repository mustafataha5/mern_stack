import { Button, Card, CardContent, CardHeader, Paper } from '@mui/material'
import React from 'react'

const MyComponent = () => {
    return (
        <div>
            <Paper elevarion={15}>
                <h1>Hellow world</h1>
            </Paper>
           
            <Card>
                <CardHeader><p>head</p></CardHeader>
                <CardContent>
                    <h1>This is content within my card</h1>
                </CardContent>
            </Card>
            <Button>Click Me</Button>
        </div>
    )
}

export default MyComponent

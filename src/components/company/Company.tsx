import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardTitle,
    CardText,
    CardBody,
    CardFooter,
    Table,
    CardHeader,
    Input
} from 'reactstrap';
import {
    XYPlot,
    LineSeries,
    MarkSeries,
    VerticalBarSeries,
    FlexibleXYPlot,
    LineMarkSeries,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis,
    FlexibleWidthXYPlot
} from "react-vis";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { LINE_GRAPH_COLOR } from '../../data/const';
import { useEffect, useState } from 'react';

interface Props {
}

const CompanyComponent = (props: Props) => {
    const [weeklyPlotData, setWeeklyPlotData] = useState(
        [...new Array(7)].map((el, i) => {
            return { x: new Date(2021, 5, 10 + i), y: 0 }
        })
    );
    const [weeklyRatings, setWeeklyRatings] = useState({
        positiveRatings: 0,
        negativeRatings: 0,
        skippedRatings: 0
    });

    useEffect(() => {
        setTimeout(() => {
            const data = [...new Array(7)].map((el, i) => {
                return { x: new Date(2021, 5, 10 + i), y: i % 5 }
            });

            setWeeklyPlotData(data);
            setWeeklyRatings({
                positiveRatings: 54,
                negativeRatings: 12,
                skippedRatings: 7
            })
        }, 500);
    }, []);

    return (
        <>
            <Container fluid>
                <h3 className="py-3 mb-3">Company</h3>
                <Row>
                    <Col>
                        <h6 className="uc-page-title mb-3">General</h6>
                        <Card className="conv-card">
                            <CardBody>
                                <CardTitle tag="h5">Company Name</CardTitle>
                                <CardText>Not so Special Company</CardText>
                                <CardTitle tag="h5">Company Owner</CardTitle>
                                <CardText>Callum Tuna</CardText>
                                <CardTitle tag="h5">Date Created</CardTitle>
                                <CardText>9 May, 2021 at 13:30</CardText>
                                <CardTitle tag="h5">Members</CardTitle>
                                <CardText>
                                    <ul className="pl-3 list-type-none">
                                        <li>1200 Support Agents</li>
                                        <li>95 Supervisors</li>
                                    </ul>
                                </CardText>
                                <CardTitle tag="h5">Overall Performance Rating</CardTitle>
                                <CardText>Great Performance</CardText>
                                <CardTitle tag="h5">Overall Customer Feedback</CardTitle>
                                <CardText><em className="ion ion-ios-thumbs-up text-success"></em> Positive</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md="12" lg="6">
                        <h6 className="uc-page-title mb-3">Weekly Performance</h6>
                        <Card className="conv-card">
                            <CardBody className="px-0 pr-3">
                                <FlexibleWidthXYPlot height={300} xType="time">
                                    <VerticalGridLines />
                                    <HorizontalGridLines />
                                    <XAxis tickTotal={7} />
                                    <YAxis />
                                    <LineMarkSeries
                                        animation
                                        color={LINE_GRAPH_COLOR}
                                        data={weeklyPlotData}
                                    />
                                </FlexibleWidthXYPlot>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="12" lg="6" className="mt-4 mt-lg-0">
                        <h6 className="uc-page-title mb-3">Weekly Customer Ratings</h6>
                        <Card className="conv-card">
                            <CardBody>
                                <Row>
                                    <Col>
                                        <CardTitle tag="h5">Positive</CardTitle>
                                        <CardText className="text-success perf-metric">
                                            <CountUp end={weeklyRatings.positiveRatings} duration={3} />
                                            <em className="ml-2 ion ion-ios-thumbs-up"></em>
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <CardTitle tag="h5">Negative</CardTitle>
                                        <CardText className="text-danger perf-metric">
                                            <CountUp end={weeklyRatings.negativeRatings} duration={3} />
                                            <em className="ml-2 ion ion-ios-thumbs-down"></em>
                                        </CardText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CardTitle tag="h5">Ratio</CardTitle>
                                        <CardText className="perf-metric">
                                            <CountUp
                                                end={weeklyRatings.negativeRatings > 0 ? weeklyRatings.positiveRatings / weeklyRatings.negativeRatings : 0}
                                                decimals={2}
                                                duration={3}
                                            />{' '}
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <CardTitle tag="h5">Skipped</CardTitle>
                                        <CardText className="perf-metric">
                                            <CountUp end={weeklyRatings.skippedRatings} duration={3} />{' '}
                                        </CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h6 className="uc-page-title mb-3">Members</h6>
                        <Card className="conv-card">
                            <CardHeader className="conv-actions">
                                <Row>
                                    <Col sm="12" md="9" className="text-md-left text-center mb-md-0 mb-2">
                                        <Input type="text" className="d-inline-block px-input align-middle w-auto"/>
                                        <Button className="d-inline-block px-button pink align-middle shadow-none ml-2">
                                            Search
                                            <em className="ion ion-ios-search ion-lg"></em>
                                        </Button>
                                    </Col>
                                    <Col className="text-md-right text-center">
                                        <Button className="px-button pink shadow-none">
                                            Add Member
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Table borderless className="px-table">
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>E-Mail</th>
                                            <th>Phone</th>
                                            <th>Last Seen</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [...new Array(10)].map(() => {
                                                return <tr>
                                                    <th scope="row">Callum Tuna</th>
                                                    <td>mail@mailservice.com</td>
                                                    <td>+123456789</td>
                                                    <td>14 May, 2021 at 14:00</td>
                                                    <td>
                                                        <div><Link className="px-table-action" to="/company"><em className="ion ion-ios-play-circle"></em> Make Supervisor</Link></div>
                                                        <div><Link className="px-table-action" to="/company/remove"><em className="ion ion-ios-close-circle"></em> Remove</Link></div>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                            <CardFooter className="conv-actions text-md-right text-center">
                                <Button className="px-button pink shadow-none">
                                    <em className="ion ion-ios-arrow-dropleft ion-lg ml-0 mr-1"></em>
                                    Previous Page
                                </Button>
                                <Button className="px-button pink shadow-none">
                                    Next Page
                                    <em className="ion ion-ios-arrow-dropright ion-lg"></em>
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CompanyComponent;
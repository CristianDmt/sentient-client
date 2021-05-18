import React, { useEffect, useState, useMemo } from "react";
import CountUp from "react-countup";
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
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Container,
    Row
} from "reactstrap";
import isDeepEqual from "react-fast-compare";
import { LINE_GRAPH_COLOR } from "../data/const";

interface Props { }

const PerformanceComponent = (props: Props) => {
    const [todayPlotData, setTodayPlotData] = useState(
        [...new Array(24)].map((el, i) => {
            return { x: new Date(2021, 5, 15, i, 0), y: 0 }
        })
    );
    const [weeklyPlotData, setWeeklyPlotData] = useState(
        [...new Array(7)].map((el, i) => {
            return { x: new Date(2021, 5, 10+i), y: 0 }
        })
    );
    const [weeklyRatings, setWeeklyRatings] = useState({
        positiveRatings: 0,
        negativeRatings: 0,
        skippedRatings: 0
    });
    
    useEffect(() => {
        setTimeout(() => {
            const data = [...new Array(24)].map((el, i) => {
                return { x: new Date(2021, 5, 15, i, 0), y: i%5 }
            });

            const data2 = [...new Array(7)].map((el, i) => {
                return { x: new Date(2021, 5, 10+i), y: i%5 }
            });

            setTodayPlotData(data);
            setWeeklyPlotData(data2);
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
                <h3 className="py-3 mb-3">Performance</h3>
                <Row>
                    <Col>
                        <h6 className="uc-page-title mb-3">Today's Performance</h6>
                        <Card className="conv-card">
                            <CardBody className="px-0 pr-3">
                                <FlexibleWidthXYPlot height={300} xType="time">
                                    <VerticalGridLines />
                                    <HorizontalGridLines />
                                    <XAxis tickTotal={12} />
                                    <YAxis />
                                    <LineMarkSeries
                                        animation
                                        color={LINE_GRAPH_COLOR}
                                        data={todayPlotData}
                                    />
                                </FlexibleWidthXYPlot>
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
                                            <CountUp end={weeklyRatings.positiveRatings} duration={3}/>
                                            <em className="ml-2 ion ion-ios-thumbs-up"></em>
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <CardTitle tag="h5">Negative</CardTitle>
                                        <CardText className="text-danger perf-metric">
                                            <CountUp end={weeklyRatings.negativeRatings} duration={3}/>
                                            <em className="ml-2 ion ion-ios-thumbs-down"></em>
                                        </CardText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CardTitle tag="h5">Ratio</CardTitle>
                                        <CardText className="perf-metric">
                                        <CountUp 
                                            end={weeklyRatings.negativeRatings > 0 ? weeklyRatings.positiveRatings/weeklyRatings.negativeRatings : 0} 
                                            decimals={2} 
                                            duration={3}
                                        />{' '}
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <CardTitle tag="h5">Skipped</CardTitle>
                                        <CardText className="perf-metric">
                                            <CountUp end={weeklyRatings.skippedRatings} duration={3}/>{' '}
                                        </CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PerformanceComponent;
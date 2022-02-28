import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        <Row>
          {props.github && (
            <Col>
              <Button variant="primary" href={props.github} target="_blank">
                <BiLinkExternal /> &nbsp; Github
              </Button>
            </Col>
          )}

          {props.webapp && (<Col>
            <Button variant="primary" href={props.webapp} target="_blank">
              <BiLinkExternal /> &nbsp; WebApp
            </Button>
          </Col>)}
        </Row>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

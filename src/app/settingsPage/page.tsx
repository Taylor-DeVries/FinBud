import Image from "next/image";
import { Row, Col } from "react-bootstrap";

export default function SettingsPage() {
    return (
        <Row className="flex justify-center items-center text-center min-h-screen ">
            <Col className="flex flex-col items-center space-y-16">
                <div className="blue_bubble text-center">
                    <h2>Work in Progress</h2>
                </div>
                <Image
                    src="/images/FinConstruction.png"
                    alt="Fin"
                    width={400}
                    height={400}
                    className="w-[300px] h-auto sm:w-[400px] sm:h-auto object-contain"
                    unoptimized={true}
                />
            </Col>
        </Row>
    );
}

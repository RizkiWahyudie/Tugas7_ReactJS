import { Button, Row, Col, Alert, Badge, Breadcrumb, BreadcrumbItem, Card, CardImg, Container } from "react-bootstrap";

function App() {
  return (
    <div className="overflow-hidden mt-2">
      <Row>
        <Col lg={3}>
          <Alert>Website React Bootstrap</Alert>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col lg={3}>
          <Button>Notifications <Badge bg="white" text="black">9</Badge></Button>
          <Button>Message <Badge bg="white" text="black">19</Badge></Button>
        </Col>
        <Col>
          <img style={{ margin: "10px" }} src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" alt="" width="25px" />
          <span>Andreas</span>
        </Col>
      </Row>
        <Row>
          <Col lg={8}></Col>
          <Col>
            <Breadcrumb className="pt-3 pb-1 px-3" style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: "8px" }}>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Berita</BreadcrumbItem>
              <BreadcrumbItem active>Bola</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Container>
        <Row style={{ marginTop: "1.5rem" }}>
          <Col>
            <Card>
              <CardImg src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
              <Card.Body>
                <Card.Title>
                  Diego Godin Ukir Rekor Spesial Lawan Thailand
                </Card.Title>
                <Card.Text>
                  Godin sekarang menjadi pemain uruguay dengan caps terbanyak setelah membantu negaranya melibas Thaild]and di final piala tiongkok. Diego godin boleh berbangga setelah resmi menjadi.
                </Card.Text>
                <Button>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>
                  Neymar Bahas Kontrak Baru Si Paris Saint-Germain
                </Card.Title>
                <Card.Text>
                  Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.
                </Card.Text>
                <Button>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>
                  Inggris Mau Jadi Tim Terbaik Di Dunia
                </Card.Title>
                <Card.Text>
                  Kumpulan Talenta terbaik yang dimiliki Inggris saat ini membuat barkley sangat optimistis. Ross Barkley merasa inggris sudah berasa dijalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini.
                </Card.Text>
                <Button>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>
                  Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus
                </Card.Title>
                <Card.Text>
                  Gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pamungkas grup K.
                </Card.Text>
                <Button>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;

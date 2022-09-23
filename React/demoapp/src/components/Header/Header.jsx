import { Routes, Route, Link, Outlet } from "react-router-dom";
import HomePages from '../Pages/HomePages';
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import LoginPage from "../Pages/FeaturePages/LoginPage";
import DetailPage from "../Pages/FeaturePages/DetailPage";
import EditPage from "../Pages/FeaturePages/EditPage";
import PostPage from "../Pages/PostPage";
import PostsPage from "../Pages/PostsPage";
import AddPostPage from "../Pages/FeaturePages/AddPostPage";
import NotFoundPage from "../Pages/FeaturePages/NotFoundPage";
import { Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import { FormControl } from "react-bootstrap/esm/FormControl";
import Container from "react-bootstrap/esm/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavbarCollapse } from "react-bootstrap/esm/NavbarCollapse";
import Button from "react-bootstrap/esm/Button";
import './Header.css'
const Header = () => {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand><img
                    src={require('./small_logo.png')}
                    width="80"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        <Nav.Link href="/posts">POSTS</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Routes>
                <Route path="" element={<HomePages />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="post/edit" element={<PostPage />} />
                <Route path="postdetail" element={<DetailPage />} />
                <Route path="posts" element={<Outlet />}>
                    <Route
                        index
                        element={<PostsPage />}
                    />
                    <Route
                        path=":postId"
                        element={<PostPage />}
                    />
                    <Route
                        path="post/edit:postId"
                        element={<EditPage />}
                    />
                    <Route
                        path="post/add"
                        element={<AddPostPage />}
                    />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>);
}
export default Header;
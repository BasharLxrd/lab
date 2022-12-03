import '../Style/Blog.css';
import BlogContent from './BlogContent';



function Blog(props) {
    return (
        <div>

            <div className='container'>
                <div className='blogs'>
                    <div className='ftrd'>
                        <h2>Featured Blogs</h2>
                    </div>
                    <div className='blog_content'>
                        {props.items.map((product) => (
                            <BlogContent className='blogcard'
                                url={product.url}
                                imgAlt={product.imgAlt}
                                title={product.title}
                                description={product.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Blog;
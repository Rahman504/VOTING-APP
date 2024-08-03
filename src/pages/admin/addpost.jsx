


const addPostPage = () => {
    return (
        <form>
            <h1>Add post</h1>
            <div>
                <p>Post name</p>
                <input type="text" name="name" />
            </div>
            <div>
                <p>Post description</p>
                <input type="text" name="password" />
            </div>
            <input type="submit" value="Add post" />
        </form>
    );
}

export default addPostPage;
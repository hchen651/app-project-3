export default function imageUpload() {
  return (
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" accept="image/jpeg" name="photo" />
      <input type="submit" value="upload" />
    </form>
  );
}

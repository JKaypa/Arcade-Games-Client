import Genres from "../Genres/genres";
import Platforms from "../Platforms/platforms";
import style from "./form.module.css";

function Form({
  handleEdit,
  handleSubmit,
  handleOptions,
  handleForm,
  handleImg,
  name,
  image,
  genres,
  platforms,
  rating,
  released,
  description,
}) {
  const img = (img) => {
    if (img) {
      if (img.name) return URL.createObjectURL(img);
      return img;
    }
    return img;
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.section}>
          <label>Title</label>
          <input
            className={style.input}
            onChange={handleForm}
            type="text"
            placeholder="Title"
            name="name"
            value={name}
            autoComplete="off"
          />
        </div>
        <div className={style.section}>
          <label className={style.file} htmlFor="file"></label>
          <input
            id="file"
            onChange={handleImg}
            type="file"
            placeholder="Upload image"
            name="image"
          />
          <img className={style.image} src={img(image)} alt={''} />
        </div>
        <div className={style.options}>
          <div className={style.section}>
            <label>Genres</label>
            <Genres className={style.input} handleChange={handleOptions} />
            {genres.map((genre, i) => (
              <button
                className={style.list}
                type="button"
                key={i}
                name="genres"
                value={genre}
                onClick={handleEdit}
              >
                {genre + " x"}
              </button>
            ))}
          </div>
          <div className={style.section}>
            <label>Platforms</label>
            <Platforms handleChange={handleOptions} />
            {platforms.map((plat, i) => (
              <button
                className={style.list}
                type="button"
                key={i}
                name="platforms"
                value={plat}
                onClick={handleEdit}
              >
                {plat + " x"}
              </button>
            ))}
          </div>
        </div>
        <div className={style.section}>
          <label>Rating</label>
          <input
            className={style.input}
            onChange={handleForm}
            type="number"
            placeholder="Rating"
            name="rating"
            value={rating}
            autoComplete="off"
          />
        </div>
        <div className={style.section}>
          <label>Released</label>
          <input
            className={style.input}
            onChange={handleForm}
            type="date"
            placeholder="Released Date"
            name="released"
            value={released}
            autoComplete="off"
          />
        </div>
        <div className={style.section}>
          <label>Description</label>
          <textarea
            className={style.description}
            rows="10"
            onChange={handleForm}
            placeholder="Description..."
            name="description"
            value={description}
            autoComplete="off"
          />
        </div>
        <button className={style.submit} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Form;

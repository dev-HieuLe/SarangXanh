import db from "../Config/db.js";

// ✅ Get all stats + timeline
export const getData = async (req, res) => {
  try {
    const [stats] = await db.execute("SELECT * FROM Stats LIMIT 1");
    const [timeline] = await db.execute("SELECT * FROM Timeline ORDER BY id DESC");

    res.json({
      stats: stats[0],
      timeline
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load data" });
  }
};

// ✅ Update stats (plastic collected, recycled, volunteers)
export const updateStats = async (req, res) => {
  try {
    const { plastic_collected, plastic_recycled, volunteers } = req.body;

    await db.execute(
      "UPDATE Stats SET plastic_collected = ?, plastic_recycled = ?, volunteers = ? WHERE id = 1",
      [plastic_collected, plastic_recycled, volunteers]
    );

    res.json({ status: "Success", message: "Stats updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update stats" });
  }
};

// ✅ Add new timeline event
export const addTimeline = async (req, res) => {
  try {
    const { date, title, description, image } = req.body;

    await db.execute(
      "INSERT INTO Timeline (date, title, description, image) VALUES (?, ?, ?, ?)",
      [date, title, description, image]
    );

    res.json({ status: "Success", message: "Timeline event added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add timeline event" });
  }
};

// ✅ Delete timeline event
export const deleteTimeline = async (req, res) => {
  try {
    const { id } = req.params;

    await db.execute("DELETE FROM Timeline WHERE id = ?", [id]);

    res.json({ status: "Success", message: "Timeline event deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete timeline event" });
  }
};

// ✅ Edit timeline event
export const editTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, title, description, image } = req.body;

    await db.execute(
      "UPDATE Timeline SET date = ?, title = ?, description = ?, image = ? WHERE id = ?",
      [date, title, description, image, id]
    );

    res.json({ status: "Success", message: "Timeline event updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update timeline event" });
  }
};

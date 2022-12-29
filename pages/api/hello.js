// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dbConnect } from "../../Database"

dbConnect();
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

//task-manager
//gAk3VgyZjTBjCMYh
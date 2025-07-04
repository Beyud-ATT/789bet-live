import axoisBase from "./axiosBase";

const endpoint = "/livestream-configs";

async function getLivestreamConfig() {
  try {
    const res = await axoisBase.get(endpoint);
    return res;
  } catch (error) {
    console.error("Error in getLivestreamConfig:", error);
    throw error;
  }
}

async function createLivestreamConfig(data) {
  try {
    const res = await axoisBase.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    console.error("Error in createLivestreamConfig:", error);
    throw error;
  }
}

async function updateLivestreamConfig(data) {
  try {
    const res = await axoisBase.put(`${endpoint}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    console.error("Error in updateLivestreamConfig:", error);
    throw error;
  }
}

async function deleteLivestreamConfig(livestreamId) {
  try {
    const res = await axoisBase.delete(`${endpoint}/${livestreamId}`);
    return res;
  } catch (error) {
    console.error("Error in deleteLivestreamConfig:", error);
    throw error;
  }
}

async function updateLivestreamKey() {
  try {
    const res = await axoisBase.patch(`${endpoint}/key`);
    return res;
  } catch (error) {
    console.error("Error in updateLivestreamKey:", error);
    throw error;
  }
}

async function getRTMPServers() {
  try {
    const res = await axoisBase.get(`${endpoint}/rtmp-servers`);
    return res;
  } catch (error) {
    console.error("Error in getRTMPServers:", error);
    throw error;
  }
}

async function createNewLiveSession(data) {
  try {
    const res = await axoisBase.post(`${endpoint}/session`, data);
    return res;
  } catch (error) {
    console.error("Error in createNewLiveSession:", error);
    throw error;
  }
}

export {
  getLivestreamConfig,
  createLivestreamConfig,
  updateLivestreamConfig,
  deleteLivestreamConfig,
  updateLivestreamKey,
  getRTMPServers,
  createNewLiveSession,
};

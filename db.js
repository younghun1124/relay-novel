// db.js (MongoDB 연결 설정)
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect('your-mongodb-connection-string', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB 연결 성공');
  } catch (error) {
    console.error('MongoDB 연결 실패', error);
  }
};

export default connectToDatabase;

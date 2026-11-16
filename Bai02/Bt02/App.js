
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import Header from './components/Header';
import StatCard from './components/StatCard';
import CourseCard from './components/CourseCard';
import BottomMenu from './components/BottomMenu';

export default function App() {
  const days = [
    'CHỦ NHẬT',
    'THỨ HAI',
    'THỨ BA',
    'THỨ TƯ',
    'THỨ NĂM',
    'THỨ SÁU',
    'THỨ BẢY'
  ];

  const currentDay = days[new Date().getDay()];

  const courses = [
    {
      id: 1,
      name: 'Lập trình React Native',
      teacher: 'Nguyễn Thành Danh',
      progress: 80,
      icon: '📱',
      color: '#C66B43'
    },
    {
      id: 2,
      name: 'Lập trình Java',
      teacher: 'Hà Văn Sâm',
      progress: 65,
      icon: '💻',
      color: '#9A815F'
    },
    {
      id: 3,
      name: 'Cơ sở dữ liệu',
      teacher: 'Huỳnh Thanh Tùng',
      progress: 45,
      icon: '🗄️',
      color: '#718477'
    },
    {
      id: 4,
      name: 'Thiết kế Web',
      teacher: 'Nguyễn Quốc Huy',
      progress: 90,
      icon: '🌐',
      color: '#B77A91'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header />

        <View style={styles.studentCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.studentLabel}>
              THÔNG TIN SINH VIÊN
            </Text>

            <Text style={styles.studentName}>
              Phạm Hoàng Hải
            </Text>

            <Text style={styles.studentClass}>
              Lớp CD-CNTT18A
            </Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>H</Text>
          </View>
        </View>

        <View style={styles.greeting}>
          <Text style={styles.date}>
            {currentDay} · NGÀY HỌC MỚI
          </Text>

          <Text style={styles.title}>
            Xin chào,
          </Text>

          <Text style={styles.titleName}>
            Hải ! ✳
          </Text>

          <Text style={styles.subtitle}>
            Mỗi ngày học một chút,{'\n'}
            mỗi ngày tiến bộ một chút.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Thống kê học tập
          </Text>
          <Text style={styles.decoration}>✳</Text>
        </View>

        <View style={styles.stats}>
          <StatCard
            number="04"
            title="Khóa học"
            icon="▤"
            color="#C66B43"
            bg="#F0DFD1"
          />

          <StatCard
            number="12"
            title="Bài học"
            icon="✎"
            color="#718477"
            bg="#E2E8DF"
          />

          <StatCard
            number="75%"
            title="Hoàn thành"
            icon="◉"
            color="#A18457"
            bg="#EEE7D7"
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Danh sách môn học
          </Text>

          <Text style={styles.courseCount}>
            04 môn
          </Text>
        </View>

        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            index={index}
          />
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Chăm chỉ hôm nay - Thành công ngày mai!
          </Text>
        </View>
      </ScrollView>

      <BottomMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E7'
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },

  studentCard: {
    backgroundColor: '#282522',
    padding: 19,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },

  studentLabel: {
    fontSize: 10,
    color: '#D59A77',
    letterSpacing: 1
  },

  studentName: {
    color: '#FFFCF6',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 9
  },

  studentClass: {
    color: '#B8B0A4',
    fontSize: 12,
    marginTop: 7
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#C66B43',
    justifyContent: 'center',
    alignItems: 'center'
  },

  avatarText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  greeting: {
    marginTop: 28,
    marginBottom: 27
  },

  date: {
    fontSize: 10,
    color: '#C66B43',
    fontWeight: 'bold',
    letterSpacing: 1
  },

  title: {
    fontSize: 34,
    fontWeight: '300',
    color: '#282522',
    marginTop: 15
  },

  titleName: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#C66B43'
  },

  subtitle: {
    fontSize: 13,
    color: '#898176',
    lineHeight: 21,
    marginTop: 10
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },

  sectionTitle: {
    color: '#282522',
    fontSize: 19,
    fontWeight: 'bold'
  },

  decoration: {
    fontSize: 23,
    color: '#C66B43'
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },

  courseCount: {
    color: '#C66B43',
    fontSize: 11,
    fontWeight: 'bold'
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 25
  },

  footerText: {
    fontSize: 11,
    color: '#898176'
  }
});

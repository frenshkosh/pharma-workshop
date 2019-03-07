package hospital.mybatis.configuration;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.jolbox.bonecp.BoneCPDataSource;

@Configuration("MybatisBaseClientConfiguration")
@MapperScan(basePackages = { "hospital.mybatis.mapper" }, sqlSessionFactoryRef = "primarySqlSessionFactory")
public class MyBatisConfiguration {
	
	private static final Logger logger = LoggerFactory.getLogger(MyBatisConfiguration.class);

	@Value("${hospital.driverClass}")
	private String driverClass;

	@Value("${hospital.url}")
	private String jdbcUrl;

	@Value("${hospital.username}")
	private String jdbcUsername;

	@Value("${hospital.password}")
	private String jdbcPassword;

	@Bean(destroyMethod = "close")
	@Qualifier("primaryDataSource")
	public DataSource primaryDataSource() {
		logger.debug("---------> Set BoneCP Data Pool");
		BoneCPDataSource dataSource = new BoneCPDataSource();
		dataSource.setDriverClass(driverClass);
		dataSource.setJdbcUrl(jdbcUrl);
		dataSource.setPassword(jdbcPassword);
		dataSource.setUsername(jdbcUsername);
		return dataSource;
	}

	@Bean
	@Qualifier("primarySqlSessionFactory")
	public SqlSessionFactory primarySqlSessionFactory(@Qualifier("primaryDataSource") DataSource dataSource)
			throws Exception {
		logger.debug("---------> Set SqlSessionFactory");
		SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(dataSource);
		return sessionFactory.getObject();
	}

	@Bean(destroyMethod = "clearCache")
	@Qualifier("primarySqlSessionTemplate")
	public SqlSessionTemplate primarySqlSessionTemplate(
			@Qualifier("primarySqlSessionFactory") SqlSessionFactory sqlSessionFactory) {
		logger.debug("---------> Set SqlSessionTemplate");
		return new SqlSessionTemplate(sqlSessionFactory);
	}

	@Bean(destroyMethod = "clearCache")
	@Qualifier("primarySqlSessionTemplateBatch")
	public SqlSessionTemplate primarySqlSessionTemplateBatch(
			@Qualifier("primarySqlSessionFactory") SqlSessionFactory sqlSessionFactory) {
		logger.debug("---------> Set SqlSessionTemplate");
		return new SqlSessionTemplate(sqlSessionFactory);
	}


}
